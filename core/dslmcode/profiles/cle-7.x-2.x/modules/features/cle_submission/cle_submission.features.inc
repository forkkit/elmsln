<?php
/**
 * @file
 * cle_submission.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function cle_submission_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "flexslider" && $api == "flexslider_default_preset") {
    return array("version" => "1");
  }
  if ($module == "radioactivity" && $api == "radioactivity_decay_profile") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
  if ($module == "video_embed_field" && $api == "default_video_embed_styles") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_flag_default_flags().
 */
function cle_submission_flag_default_flags() {
  $flags = array();
  // Exported flag: "Exemplary".
  $flags['cle_exemplary'] = array(
    'content_type' => 'node',
    'title' => 'Exemplary',
    'global' => 1,
    'types' => array(
      0 => 'cle_submission',
    ),
    'flag_short' => 'Mark Exemplary',
    'flag_long' => 'This makes it stand out in lists as well as helps students find work that is deemed Exemplary of the goals of the assignment',
    'flag_message' => 'Submission is now Exemplary',
    'unflag_short' => 'Remove Exemplary Mark',
    'unflag_long' => 'This sets it back to normal',
    'unflag_message' => 'Submission has been returned to normal state',
    'unflag_denied_text' => '',
    'link_type' => 'confirm',
    'roles' => array(
      'flag' => array(
        0 => 9,
        1 => 5,
        2 => 7,
        3 => 3,
      ),
      'unflag' => array(
        0 => 9,
        1 => 5,
        2 => 7,
        3 => 3,
      ),
    ),
    'weight' => 0,
    'show_on_form' => 0,
    'access_author' => '',
    'show_on_page' => 1,
    'show_on_teaser' => 0,
    'show_contextual_link' => 0,
    'i18n' => 0,
    'flag_confirmation' => 'Are you sure you want to mark this exemplary?',
    'unflag_confirmation' => 'Remove exemplary mark from this submission.',
    'module' => 'cle_submission',
    'locked' => array(
      0 => 'name',
    ),
    'api_version' => 2,
  );
  return $flags;

}

/**
 * Implements hook_image_default_styles().
 */
function cle_submission_image_default_styles() {
  $styles = array();

  // Exported image style: cle_micro.
  $styles['cle_micro'] = array(
    'label' => 'cle_micro',
    'effects' => array(
      1 => array(
        'name' => 'smartcrop_scale_and_crop',
        'data' => array(
          'width' => 60,
          'height' => 60,
          'upscale' => 0,
          '#imageinfo_cache_effect_callback' => 'smartcrop_scale_effect',
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: cle_square.
  $styles['cle_square'] = array(
    'effects' => array(
      1 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 250,
          'height' => '',
          'upscale' => 1,
          '#imageinfo_cache_effect_callback' => 'image_scale_effect',
        ),
        'weight' => 1,
      ),
    ),
    'label' => 'cle_square',
  );

  // Exported image style: cle_submission.
  $styles['cle_submission'] = array(
    'label' => 'cle_submission',
    'effects' => array(
      1 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 600,
          'height' => '',
          'upscale' => 1,
          '#imageinfo_cache_effect_callback' => 'image_scale_effect',
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function cle_submission_node_info() {
  $items = array(
    'cle_submission' => array(
      'name' => t('Submission'),
      'base' => 'node_content',
      'description' => t('A creative submission.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
