<div class="liquid-container">
  <nav id="navb" class="navbar navbar-default navbar-fixed-top" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mobile-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand">
            <a class="transfade" href="/redtower/"><img class="img-responsive" src="img/logo.png" /></a>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="mobile-collapse">
          <ul class="nav navbar-nav navbar-right">
            <img class="img-responsive center-block visible-xs" src="img/mobile-logo.png" />
            <li class="<?php if($currentPage =='work'){echo 'active';}?>"><a class="navlink transfade" href="/redtower/work/">Work</a></li>
            <li class="<?php if($currentPage =='philosophy'){echo 'active';}?>"><a class="navlink transfade" href="/redtower/philosophy/">Philosophy</a></li>
            <li class="<?php if($currentPage =='learn'){echo 'active';}?>"><a class="navlink transfade" href="/redtower/learn/">Learn</a></li>
            <li class="<?php if($currentPage =='contact'){echo 'active';}?>"><a class="navlink transfade" href="/redtower/contact/">Contact</a></li>
            <p class="visible-xs text-center"><a href="mailto:hello@redtowerdigital.com">hello@redtowerdigital.com</a><br />309-555-5555</p>
            <p class="visible-xs text-center"><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>&emsp;<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>&emsp;<a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></p>
          </ul>
        </div><!-- /.navbar-collapse -->
  </nav>
</div>
