// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

const ballon = document.getElementById("balloon");


let fontSize = 30; // starting size for the balloon */
balloon.style.fontSize = fontSize + 'px';
function handleKeydown(event) {
    if (event.key == 'ArrowUp') {
        if (fontSize > 30){ // The size the balloon will pop at */
            balloon.textContent = "💥"; // when popped the down arrow will not throw the event */
            removeEventListener('keydown', handleKeydown);

        }else{
            fontSize *= 1.1; // the size the balloon will grow when the arrow key up is pressed */
            balloon.style.fontSize = fontSize + 'px';
            event.preventDefault();
        }
    }
}else if (event.key == 'ArrowDown') { // if arrow key down is pressed it will decrease by this size */
    fontSize *= 0.9;
    balloon.style.fontSize = fontSize + 'px';
    event.preventDefault();
}
window.addEventListener('keydown', handleKeydown);



// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it



// selects the tabs */
const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');
const tab3 = document.querySelector('#tab3');
// selects the link tab*/
const tab1link = document.querySelector('#tab1Link');
const tab2link = document.querySelector('#tab2Link');
const tab3link = document.querySelector('#tab3Link');

function showtab(tabtoshow){
  tab1.style.display = "none";// hides the tabs not selected  */
  tab2.style.display = "none";
  tab3.style.display = "none";
  tabtoshow.style.display = "block";// this will be shown when selected */
}
// starts with tab 1 default */
showtab(tab1);
// event listeners to tabs when tab is selected */

tab1link.addEventListener("click", function(event){
  event.preventDefault();
  showtab(tab1);
});
tab2link.addEventListener("click", function(event){
  event.preventDefault();
  showtab(tab2);
});
tab3link.addEventListener("click",function(event){
  event.preventDefault();
  showtab(tab3)