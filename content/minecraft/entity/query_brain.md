---
title: query(e, 'brain')
name: query
signatures:
  - params:
      - name: entity
      - name: "'brain'"
      - name: memory
---

Retrieves brain memory for entity. Possible memory units highly depend on the
game version. Brain is availalble for villagers (1.15+) and Piglins, Hoglins,
Zoglins and Piglin Brutes (1.16+). If memory is not present or not available for
the entity, `null` is returned.

Type of the returned value (entity, position, number, list of things, etc)
depends on the type of the requested memory. On top of that, since 1.16,
memories can have expiry - in this case the value is returned as a list of
whatever was there, and the current ttl in ticks.

Available retrievable memories for 1.15.2:

- `home`, `job_site`, `meeting_point`, `secondary_job_site`, `mobs`,
  `visible_mobs`, `visible_villager_babies`, `nearest_players`,
  `nearest_visible_player`, `walk_target`, `look_target`, `interaction_target`,
  `breed_target`, `path`, `interactable_doors`, `opened_doors`, `nearest_bed`,
  `hurt_by`, `hurt_by_entity`, `nearest_hostile`, `hiding_place`,
  `heard_bell_time`, `cant_reach_walk_target_since`, `golem_last_seen_time`,
  `last_slept`, `last_woken`, `last_worked_at_poi`

Available retrievable memories as of 1.16.2:

- `home`, `job_site`, `potential_job_site`, `meeting_point`,
  `secondary_job_site`, `mobs`, `visible_mobs`, `visible_villager_babies`,
  `nearest_players`, `nearest_visible_players`,
  `nearest_visible_targetable_player`, `walk_target`, `look_target`,
  `attack_target`, `attack_cooling_down`, `interaction_target`, `breed_target`,
  `ride_target`, `path`, `interactable_doors`, `opened_doors`, `nearest_bed`,
  `hurt_by`, `hurt_by_entity`, `avoid_target`, `nearest_hostile`,
  `hiding_place`, `heard_bell_time`, `cant_reach_walk_target_since`,
  `golem_detected_recently`, `last_slept`, `last_woken`, `last_worked_at_poi`,
  `nearest_visible_adult`, `nearest_visible_wanted_item`,
  `nearest_visible_nemesis`, `angry_at`, `universal_anger`, `admiring_item`,
  `time_trying_to_reach_admire_item`, `disable_walk_to_admire_item`,
  `admiring_disabled`, `hunted_recently`, `celebrate_location`, `dancing`,
  `nearest_visible_huntable_hoglin`, `nearest_visible_baby_hoglin`,
  `nearest_targetable_player_not_wearing_gold`, `nearby_adult_piglins`,
  `nearest_visible_adult_piglins`, `nearest_visible_adult_hoglins`,
  `nearest_visible_adult_piglin`, `nearest_visible_zombiefied`,
  `visible_adult_piglin_count`, `visible_adult_hoglin_count`,
  `nearest_player_holding_wanted_item`, `ate_recently`, `nearest_repellent`,
  `pacified`
