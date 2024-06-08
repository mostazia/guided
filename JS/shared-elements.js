var navbarMobileMenuLightbox = `<div id="navbarMobileMenuLightbox">
      <div
        class="navbarMobileMenuOption"
        id="mobileSearch"
        onclick="toggleSearchMobile(true)"
      >
        Search
      </div>
      <div id="navbarMobileSearchBox">
        <input id="navbarMobileSearchInput" placeholder="Search" />
        <div
          id="navbarMobileSearchIcon"
          onclick="handleSearch(document.getElementById('navbarMobileSearchInput').value)"
        ></div>
      </div>
      <a
        class="navbarMobileMenuOption"
        href="https://www.paypal.com/donate/?hosted_button_id=L75PL47XJCQCE"
        >Donate</a
      >
      <!-- <a class="navbarMobileMenuOption" href="./about">About</a> -->
      <a class="navbarMobileMenuOption" href="./guides">Guides</a>
      <a class="navbarMobileMenuOption" href="./programs">Programs</a>
      <a class="navbarMobileMenuOption" href="./tutoring">Private Tutoring</a>
      <a
        onclick="toggleMenu(false)"
        class="navbarMobileMenuOption"
        style="border-bottom: none; font-weight: 700"
        >Close</a
      >
    </div>`;

var cartBackdrop = `<div id="cartBackdrop">
      <div id="cartLeaveContainer" onClick="displayCart(false)"></div>
      <div id="cartDisplayContainer"></div>
    </div>`;

var searchLightbox = `<div id="searchLightbox">
      <div id="searchInputContainer">
        <input id="searchInput" placeholder="Search" />
        <div id="searchInputSearchContainer">
          <div
            id="searchInputSearchButton"
            onclick="handleSearch(document.getElementById('searchInput').value)"
          ></div>
        </div>
      </div>
      <div id="searchLightboxX" onclick="toggleSearch(false)"></div>
    </div>`;

var navbar = `<div id="navbar">
      <div id="navbarMenuContainer">
        <!-- <a class="navbarMenuOption" href="./about">About</a> -->
        <a class="navbarMenuOption" href="./guides">Guides</a>
        <a class="navbarMenuOption" href="./programs">Programs</a>
        <a class="navbarMenuOption" href="./tutoring">Private Tutoring</a>
      </div>
      <div id="navbarMobileMenuContainer">
        <div id="navbarMobileMenuButton" onclick="toggleMenu(true)"></div>
      </div>
      <a id="navbarLogoContainer" href="..">
        <div id="navbarMainLogo">GuidEd</div>
        <div id="navbarSubLogo">By Stacy</div>
      </a>
      <div id="navbarOptionsContainer">
        <a
          id="navbarDonateButton"
          href="https://www.paypal.com/donate/?hosted_button_id=L75PL47XJCQCE"
          target="_blank"
          >Donate</a
        >
        <div id="navbarSearchIcon" onclick="toggleSearch(true)"></div>
        <div id="navbarBackpackIcon" onClick="displayCart(true)">
          <div id="navbarBackpackCount">1</div>
        </div>
      </div>
      <div id="navbarMobileBackpackContainer">
        <div id="navbarMobileBackpack" onclick="displayCart(true)">
          <div id="navbarMobileBackpackCount"></div>
        </div>
      </div>
    </div>`;

var footer = ` <div id="footer">
      <div class="footerText">
        A website by
        <span
          ><a
            target="_blank"
            href="https://stacyvazquez.com"
            class="footerLinks"
            >Stacy Vazquez</a
          ></span
        >
      </div>
      <div id="footerSocialMenu">
        <a
          target="_blank"
          href="mailto:guidedbystacy@gmail.com"
          class="footerSocialIcon"
          style="background-image: url(Images/FooterEmailIcon.png)"
        ></a>
        <a
          target="_blank"
          href="https://www.instagram.com/guidedbystacy/"
          class="footerSocialIcon"
          style="background-image: url(Images/FooterInstagramIcon.png)"
        ></a>
        <a
          target="_blank"
          href="https://www.youtube.com/@GuidEdByStacy"
          class="footerSocialIcon"
          style="background-image: url(Images/FooterYoutubeIcon.png)"
        ></a>
      </div>
      <div id="footerPages">
        <a class="footerLinks" href="/terms-of-service">Terms of Service</a>
        <p>&nbsp;|&nbsp;</p>
        <a class="footerLinks" href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>`;

var topElements = [
  navbarMobileMenuLightbox,
  cartBackdrop,
  searchLightbox,
  navbar,
];

var bottomElements = [footer];
