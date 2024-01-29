// SPDX-License-Identifier: Unlicense
/**
 * @fileoverview Prism.js grammar for highlighting Scarpet code.
 * @author Federico Carboni
 */
(function () {
  "use strict";
  Prism.languages.scarpet = {
    comment: {
      pattern: /\/\/.*?\n/,
      greedy: true,
    },
    string: {
      pattern: /'(?:\\'|.)*?'/,
      greedy: true,
    },
    number: /\b(0x[0-9A-Fa-f]+|[0-9]+\.[0-9]([eE][-+]?[0-9]+)?|[0-9]+)/,
    keyword:
      /\b(if|loop|c_for|for|while|continue|break|return|exit|throw|try|sum|difference|product|quotient|equal|unique|increasing|decreasing|nonincreasing|nondecreasing|and|or|bitwise_or|bitwise_and|bitwise_xor|bitwise_shift_left|bitwise_shift_right|bitwise_arithmetic_shift_right|bitwise_roll_left|bitwise_roll_right|bitwise_not|bitwise_popcount|double_to_long_bits|long_to_double_bits|m|l|call|then|outer|var|vars|undef|import|_)(?=\s*\()/,
    builtin:
      /\b(fact|sqrt|abs|round|floor|ceil|ln|ln1p|log10|log|log1p|mandelbrot|min|max|relu|sin|cos|tan|asin|acos|atan|atan2|sinh|cosh|tanh|sec|csc|sech|csch|cot|acot|coth|asinh|acosh|atanh|rad|deg|copy|type|bool|number|str|task|task_thread|sleep|task_count|task_value|task_join|task_completed|synchronize|task_dock|lower|upper|title|replace|replace_first|length|rand|reset_seed|perlin|simplex|time|unix_time|convert_date|encode_b64|decode_b64|encode_json|decode_json|profile_expr|system_variable_get|system_variable_set|map|filter|first|all|reduce|get|has|delete|put|join|split|slice|sort|sort_key|range|keys|values|pairs|scan|volume|neighbours|rect|diamond|block|set|without_updates|place_item|set_poi|set_biome|update|block_tick|random_tick|destroy|harvest|create_explosion|weather|pos|pos_offset|block_state|block_list|block_tags|block_data|poi|biome|solid|air|liquid|flammable|transparent|opacity|blocks_daylight|emitted_light|light|block_light|sky_light|effective_light|see_sky|hardness|blast_resistance|in_slime_chunk|top|suffocates|power|ticks_randomly|blocks_movement|block_sound|map_colour|sample_noise|loaded|loaded_status|is_chunk_generated|generation_status|inhabited_time|spawn_potential|reload_chunk|reset_chunk|add_chunk_ticket|structure_eligibility|structures|structure_references|set_structure|plop|player|entity_id|entity_list|entity_types|entity_area|entity_selector|spawn|query|modify|entity_load_handler|entity_event|handle_event|signal_event|item_list|item_tags|stack_limit|recipe_data|crafting_remaining_item|inventory_size|inventory_has_items|inventory_get|inventory_set|inventory_find|inventory_remove|drop_item|create_screen|close_screen|screen_property|scoreboard|scoreboard_add|scoreboard_remove|scoreboard_display|scoreboard_property|team_list|team_add|team_remove|team_leave|team_property|bossbar|sound|particle|particle_line|particle_box|draw_shape|create_marker|remove_all_markers|nbt|escape_nbt|tag_matches|parse_nbt|encode_nbt|print|format|item_display_name|display_title|logger|read_file|delete_file|write_file|list_files|run|save|load_app_data|store_app_data|create_datapack|tick_time|day_time|game_tick|current_dimension|in_dimension|get_mob_counts|schedule|statistic|system_info|nbt_storage)(?=\s*\()/,
    deprecated: /\b(block_properties|property|material|loaded_ep|particle_rect|world_time|last_tick_times|seed|view_distance)(?=\s*\()/,
    function: /\b\w+(?=\s*\()/,
    constant: /\b(null|true|false|pi|euler)/,
    operator: {
      pattern: /(^|[^.])(?:->|&&|<>|\|\||::|[?:~]|[+*/%^!=<>]|\+=?)/m,
      lookbehind: true,
    },
    variable: /\b(global_\w+|_a|_i|_x|_y|_z|_trace|_)/,
    punctuation: /[{}[\];(),.:~<>=\-+*/]/,
  };
})();
