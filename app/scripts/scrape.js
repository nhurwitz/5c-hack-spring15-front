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
                handleThumb(pages[p]["thumbnail"]["source"], title);
            }
            
        },
    });
}

function draw(path) {
    var duration = 500;
    var delay = 10;
    var old_title = "";

    (function() {
        var i = 0;

        function processTitle() {
            clean_title = encodeURIComponent(path[i].replace(/\s+/g,'_'));
            cy.style().selector('#'+clean_title)
            .css({
                'content': path[i]
            })
            getThumb(clean_title, function (url, clean_title) {
                cy.style().selector('#'+clean_title)
                .css({
                    'background-image': url,
                    'z-index' : path.length-i
                })
            
                cy.add([
                    { group: "nodes", data: { id: clean_title, href: url },
                         position: {x:100+150*(i-1), y:100} },
                    ])
                if (i > 0) {
                    cy.add([
                        { group: "edges", data: { source: old_title , target: clean_title } },
                        ])
                }
                old_title = clean_title;
                cy.$('#'+clean_title).delay(delay).animate({
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