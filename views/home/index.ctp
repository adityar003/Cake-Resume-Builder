<div id="home_intro_wrapper">
	<div id="home_intro">
		<h2 id="home_intro_header">Create Beautiful Online Resumes For Free</h2>
		<?=$this->Html->image('resume/homeintroimage2.png', array('id' => 'home_intro_image'))?>
		<div id="cta">
			<?=$html->link($html->image('resume/signupCTA.png', array('alt' => 'Signup')), array('controller' => 'users', 'action' => 'register'),
			array('escape' => false))?>
			<?=$html->image('resume/takeATour.png', array('alt' => 'Take A Tour'))?>
		</div>
	</div>
</div>

<div style="width:1019px;margin:20px auto">
		<h2>Features</h2>

		<div id="home_features">
			<ul class="features_list">
				<li>
					<?=$this->Html->image('Basic_set_Png/pencil_32.png', array('class' => 'feature_illustration'))?>
					<div class="feature_details">
						<h3>Create &amp; Edit</h3>
						<p>Creating a resume does not need to be as challenging anymore. Every resume created with Killer Resume Builder comes
						with a basic structure that is fully editable. You no longer have to pull your hair to come up with a structure for your
						resume. It's already there.</p>
					</div>
				</li>
				<li>
					<?=$this->Html->image('Basic_set_Png/gear_32.png', array('class' => 'feature_illustration'))?>
					<div class="feature_details">
						<h3>Customize</h3>
						<p>While Killer Resume Builder's basic structure is a great way to start, it might not work for you all the times. Hence
						customization. Your can rename sections, change the order that they appear on your 
						resume, or completely hide them. It's all at the tip of your fingers.</p>
					</div>
				</li>
				<li class="omega">
					<?=$this->Html->image('Basic_set_Png/globe_32.png', array('class' => 'feature_illustration'))?>
					<div class="feature_details">
						<h3>Share</h3>
						<p>Our built-in sharing tools will allow your resume to be hooked up with top-notch social networks such as Facebook, 
						Twitter etc. You've come a long way pumping out your fantastic resume, it's our job to let the world know about it.</p>
					</div>
				</li>
			</ul>
	
			<ul class="features_list">
				<li>
					<?=$this->Html->image('Basic_set_Png/clipboard_32.png', array('class' => 'feature_illustration'))?>
					<div class="feature_details">
						<h3>Theming</h3>
						<p>Killer Resume Builder comes with a variety of resume themes for you to choose from. Your resume will appear more 
						appealing and attractive. Working hand in hand with customization, the theming feature let you choose the 
						right look and feel for your resume.</p>
					</div>
				</li>
				<li>
					<?=$this->Html->image('Basic_set_Png/statistics_32.png', array('class' => 'feature_illustration'))?>
					<div class="feature_details">
						<h3>Analytics</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
						Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
						unknown printer took a galley of type and scrambled it to make a type specimen 
						book.</p>
					</div>
				</li>
				<li class="omega">
					<?=$this->Html->image('Basic_set_Png/flag_32.png', array('class' => 'feature_illustration'))?>
					<div class="feature_details">
						<h3>Theft Report</h3>
						<p>You work hard and merticulously to build your resume. You spend hours polishing it, making it look great. It is unwanted
						that your resume is plagiarized in any mean. Our theft reporting tool will notify you of any infringement possibility give
						you the support you need in response.</p>
					</div>
				</li>
			</ul>
	
			<ul class="features_list">
				<li>
					<?=$this->Html->image('Basic_set_Png/help_32.png', array('class' => 'feature_illustration'))?>
					<div class="feature_details">
						<h3>Swift Support</h3>
						<p>Have a question, concern or a technical problem? Simply contact us and we will get back to you very shortly.</p>
					</div>
				</li>
			</ul>
	
			<div class="clearfloat"></div>
		</div>

		<!-- <div id="featured_resumes">
			<ul>
				<li>
					<div class="featured_resume_snapshot">Featured (1)</div>
					<span class="featured_resume_title">Tri Vuong's resume</span>
				</li>
				<li>
					<div class="featured_resume_snapshot">Featured (2)</div>
					<span class="featured_resume_title">Peter Parker's resume</span>
				</li>
				<li>
					<div class="featured_resume_snapshot">Featured (3)</div>
					<span class="featured_resume_title">Johnny Depp's resume</span>
				</li>
			</ul>
		</div> -->

		<h2>From Our Blog</h2>

		<div id="blog_post_list" class="blue_region">
			<?=$this->element('blog_post_item', array('blog' => $latest_blog))?>
		</div>

		<div class="clearfloat"></div>
</div>