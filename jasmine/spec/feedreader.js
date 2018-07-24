    /* feedreader.js
    This is the spec file Jasmine will read. and contains
    It contains all tests to run against your application.
     */

    /* Some tests may require DOM elements.
     All test are placed within the $() function.
     To ensure test don't run until the DOM is ready.
     */
$(function() {
    /* Tests suite for RSS Feeds definition
    the allFeeds variable in the application.
    */
    describe('RSS Feeds', function() {
        /* Test if RSS sources are defined properly into allFeeds array.
         and not empty.        
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test to loop through allFeed array's object "feed"  
        to check if it has a URL defined and URL is not empty.
         */
        it('has an URL defined and not empty', function() {
           for(feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);              
        };
    });

        /* Test to loop through allFeed array's object "feed" 
         to check if it has a name defined and name is not empty.
         */
        it('has an name defined and not empty', function() {
           for(feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
        });
    });

        /* Tests suite for "The menu" */
    describe('The menu', function() {
        let body = document.getElementsByTagName('body')[0];
    
        /*Test to check if menu element is hidden by default.
        The menu visibility is determined by <body> 'menu-hidden' class. 
        This test checks if menu is present in <body> by default to hide menu.
         */
        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        }); 
        /* Test to check if menu changes visibility, when menu icon is clicked. 
        Includes two expectations: menu displays when menu icon is clicked
        and menu hide when menu icon is clicked again.
         */
        it('change visibility when the icon is clicked', function() {
            let menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });    
    });

        /*Test suite for "Initial Entries" 
         To check if single entries are loaded properly into HTML
          */
    describe('Initial Entries', function() {

    /*Write a test to ensure after loadFeed function is called
     and completed, at least one .entry element within .feed container displays.
     IMPORTANT: loadFeed() is asynchronous. So, this test requires
     the use of Jasmine's beforeEach and asynchronous done() function.
     */ 
        beforeEach(function(done) {
            loadFeed(0, done);
        });
       
        it('are loaded within the .feed container', function() {

            let feedEntries = document.querySelector('.feed').querySelectorAll('.entry');
            expect(feedEntries.length).toBeGreaterThan(0);
        });
    });

    /*Test suite for "New Feed Selection" 
    to check if page refreshes when new feed set is selected
    Store HTML content in "Feed_01" variable and
    Store HTML content of new feed in "feed_02" variable*/
     
    describe('New Feed Selection', function() {      
        let Feed_01;
        let Feed_02;

        beforeEach(function(done) {
            loadFeed(0, function() { // Load first new feeds set

                Feed_01 = document.getElementsByClassName('feed')[0].innerHTML;
                loadFeed(1, function() { // Load second new feeds set

                    Feed_02 = document.getElementsByClassName('feed')[0].innerHTML;
                    done();
                });
            });
        });     
 
        /* Test to compare content of oldFeeds and newFeeds variables.
         When a new feed is loaded by the loadFeed function, the content should change.
          Also HTML content must change, so variables should differ.
          IMPORTANT: loadFeed() is asynchronous.*/ 
                 
        it('is correctly loaded within .feed container', function() {
            expect(Feed_02).not.toEqual(Feed_01);
        });
    });
}());
