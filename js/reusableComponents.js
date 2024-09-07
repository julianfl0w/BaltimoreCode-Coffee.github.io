class OurHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <nav class="main-nav">
                <div class="navbar">
                    <a href="./index.html">Home</a>
                    <a href="./constitution.html">Constitution</a>
                    <a href="./events.html">Events</a>
                    <a href="./newsletter.html">Newsletter</a>
                    <a href="./get-involved.html">Get Involved!</a>
                    <a href="./meet-the-members.html">Meet the Members</a>
                </div>
                <button class="mobile-nav-bars">
                    <div class="top bar"></div>
                    <div class="middle bar"></div>
                    <div class="bottom bar"></div>
                </button>
            </nav> 
        `
    }
}

class OurFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer id="footer">
                <ul class="copyright">
                    <li>&copy; Baltimore Code and Coffee 2024</li>
                </ul>
            </footer>
        `
    }
}
customElements.define('our-header', OurHeader)
customElements.define('our-footer', OurFooter)