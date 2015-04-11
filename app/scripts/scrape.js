var cy;

function getThumb(title, handleThumb) {
    var url = "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&pithumbsize=200&titles="+title;
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        success: function (data, textStatus, jqXHR) {
            var pages = data["query"]["pages"];
            for (var p in pages) {
                var thumbnail = pages[p].thumbnail;
                var src = thumbnail ? thumbnail.source : "upload.wikimedia.org/wikipedia/meta/b/be/Wikipedia-logo-v2_2x.png";
                handleThumb(src, title);
            }
            
        },
    });
}

function sanitizeID(string) {
  return string.replace('(', '').replace(')', '').replace(';', '').replace('.', '');
}

function draw(path) {
    var duration = 500;
    var delay = 10;
    var old_title = "";
    var margin = (1240-250*path.length)/2+75;
    console.log(margin);

    (function() {
        var i = 0;

        function processTitle() {
            clean_title = encodeURIComponent(path[i].replace(/\s+/g,'_'));
            cy.style().selector('#'+sanitizeID(clean_title))
            .css({
                'content': path[i]
            })
            getThumb(clean_title, function (url, clean_title) {
                cy.style().selector('#'+sanitizeID(clean_title))
                .css({
                    'background-image': url,
                    'z-index' : path.length-i
                })
            
                cy.add([
                    { group: "nodes", data: { id: sanitizeID(clean_title), href: url },
                         position: {x:margin+250*(i-1), y:100} },
                    ])
                if (i > 0) {
                    cy.add([
                        { group: "edges", data: { source: old_title , target: sanitizeID(clean_title) } },
                        ])
                }
                old_title = sanitizeID(clean_title);
                cy.$('#'+sanitizeID(clean_title)).delay(delay).animate({
                        position: {x:100+250*i, y:100},
                        css: {'opacity':1}
                    }, { duration: duration, complete: function() {
                        ++i;
                        if (i < path.length)
                            processTitle();
                    }
                });
            });
        }
        processTitle();
    })();
};

function cy_init() {
   cy = cytoscape({
        container: document.getElementById('graph'),

        style: cytoscape.stylesheet()
        .selector('node')
        .css({
            'height': "150px",
            'width': "150px",
            'background-fit': 'cover',
            'border-color': '#5264AE',
            'color': '#757575',
            'border-width': 1,
            'opacity': 0.1,
            'font-family': 'Hoefler Text',
            'font-weight': 'lighter'
        })
        .selector('edge')
        .css({
            'width': 3,
            'target-arrow-shape': 'triangle',
            'line-color': '#5264AE',
            'target-arrow-color': '#5264AE'
        }),

        layout: {
            name: 'preset',
        },

        zoomingEnabled: false,
        panningEnabled: false,
        boxSelectionEnabled: false
    }); // cy init
}

$(function () {
    cy_init();
});
