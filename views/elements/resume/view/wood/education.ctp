<div id="education" class="section_wrapper">
	
	<div class="header_tag orange_tab_left">
		<div class="orange_tab_middle">
			<?=$sectionName['education']?>
		</div>
		<div class="orange_tab_right"></div>
		<div class="clearfloat"></div>
	</div>
	
	<div class="section_details_right">
		<? foreach ($resume['ResumeEducation'] as $edu) { ?>
			<h3 class="institution_name"><?= $edu['institution'] ?></h3>
			<h4 class="degree"><?= $edu['degree'] ?>, <?= $edu['field_of_study'] ?></h4>
			<div class="degree_duration"><?= $edu['begin_date'] ?> - <?= $edu['end_date'] ? $edu['end_date'] : 'present' ?></div>
		<? } ?>
	</div>

	<div class="clearfloat"></div>
	
</div>