		<!-- Navbar -->
		<div class="navbar navbar-fixed-top">
		  <div class="navbar-buttons">
			<button id="nav-button" type="button" class="navbar-toggle menu-closed">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		  </div>
		</div>
		
		<div id="fade-top"></div>
		<div id="fade-bottom"></div>
 
		<!-- Overlay Navigation Menu -->
		<div class="overlay">
			<div class="close-button">
				<button type="button" class="navbar-toggle menu-open">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
		  	</div>
			
			<div class="overlay-one overlay-content <?php if($currentPage =='about'){echo 'active';}?>">
				<a class="transfade" href="/about">
					<h2>About Me</h2>
					<p>I'm just a regular guy. But there's more to my story.</p>
				</a>
			</div>
			<div class="overlay-two overlay-content <?php if($currentPage =='work'){echo 'active';}?>">
				<a class="transfade" href="/work">
					<h2>Work</h2>
					<p>I'm a busy guy, and there's a lot to see. Check it.</p>
				</a>
			</div>
			<div class="overlay-three overlay-content">
				<a href="mailto:samual.daugherty@gmail.com?subject=I'm%20sad%20it%20just%20opens%20an%20email">
					<h2>Contact</h2>
					<p>This just sends an email. Nothing cool happens.</p>
				</a>
			</div>
		</div>