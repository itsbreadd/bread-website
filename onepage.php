<!DOCTYPE html>
<html class="w-full h-full">
	<?php include 'php/header.html'; ?>
    <body class="w-full h-full text-white">
    	<header class="w-full flex">
            <div id="menu-toggle">
                <i id="experience-menu-open" class="fa fa-bars"></i>
                <i id="experience-menu-close" class="fa fa-times"></i>
            </div>
    		<a href="/"><h1>Bradley Archer</h1></a>
            <label class="switch">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
    	</header>

    	<div id="navigation-menu" class="text-center" data-dropped="false">
    		<ul>
    			<li><a href="#">Introduction</a></li>
    			<li><a href="#">Experience</a></li>
    			<li><a href="#">Interests</a></li>
    			<li><a href="#">Contact</a></li>
    		</ul>
    	</div>

        <section class="intro w-full">
            <div class="section-container">
                <div class="w-1/2">
                    <h1 class="uppercase mb-2">Introduction</h1>
                </div>
                <p>My name is Bradley Archer and im currently a junior web developer.</p>
            </div>
        </section>

        <footer class="w-full">
            <div class="social-links flex w-full pl-8 pr-8">
                <a href="https://www.facebook.com/bread.archer" target="_blank" class="fa fa-facebook" alt="facebook" title="Facebook"></a>
                <a href="https://www.twitter.com/iarcherz" target="_blank" class="fa fa-twitter" alt="twitter" title="Twitter"></a>
                <a href="mailto:bradarcher15@gmail.com?Subject=Website%20Enquiry" target="_blank" class="fa fa-envelope" alt="email" title="Email"></a>
                <a href="https://www.instagram.com/bread_archer" target="_blank" class="fa fa-instagram" alt="instagram" title="Instagram"></a>
                <a href="https://github.com/itsbreadd" target="_blank" class="fa fa-github" alt="github" title="Github"></a>
                <a href="https://www.linkedin.com/in/bradarch/" target="_blank" class="fa fa-linkedin" alt="linkedin" title="LinkedIn"></a>
                <a href="https://www.youtube.com/user/iArcheRz" target="_blank" class="fa fa-youtube" alt="youtube" title="YouTube"></a>
            </div>
            <div class="copyright flex">
                <p class="copyright-text">Ⓒ Bradley Archer</p>
            </div>
        </footer>

        <script src="js/tooltip.js"></script>
    	<script src="js/navigation-menu.js"></script>
        <script src="js/light-dark-mode.js"></script>
    </body>
</html>