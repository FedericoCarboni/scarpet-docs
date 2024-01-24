---
signatures:
  - params:
      - name: pos
---

, `reset_chunk(from_pos, to_pos)`, `reset_chunk([pos, ...])`
Removes and resets the chunk, all chunks in the specified area or all chunks in a list at once, removing all previous
blocks and entities, and replacing it with a new generation. For all currently loaded chunks, they will be brought
to their current generation status, and updated to the player. All chunks that are not in the loaded area, will only
be generated to the `'structure_starts'` status, allowing to generate them fully as players are visiting them.
Chunks in the area that has not been touched yet by the game will not be generated / regenerated.

It returns a `map` with a report indicating how many chunks were affected, and how long each step took:
 * `requested_chunks`: total number of chunks in the requested area or list
 * `affected_chunks`: number of chunks that will be removed / regenerated
 * `loaded_chunks`: number of currently loaded chunks in the requested area / list
 * `relight_count`: number of relit chunks
 * `relight_time`: time took to relit chunks
 * `layer_count_<status>`: number of chunks for which a `<status>` generation step has been performed
 * `layer_time_<status>`: cumulative time for all chunks spent on generating `<status>` step
