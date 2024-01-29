---
title: draw_shape()
name: draw_shape
signatures:
  - params:
      - name: shape
      - name: duration
      - name: attributes
        rest: true
  - params:
      - name: shape
      - name: duration
      - name: attributes
  - params:
      - name: shapes
---

Draws a shape in the world that will expire in `duration` ticks. Other
attributes of the shape should be provided as consecutive key - value argument
pairs, either as next arguments, or packed in a list, or supplied as a proper
key-value `map`. Arguments may include shared shape attributes, which are all
optional, as well as shape-specific attributes, that could be either optional or
required. Shapes will draw properly on all carpet clients. Other connected
players that don't have carpet installed will still be able to see the required
shapes in the form of dust particles. Replacement shapes are not required to
follow all attributes precisely, but will allow vanilla clients to receive some
experience of your apps. One of the attributes that will definitely not be
honored is the duration - particles will be send once per shape and last
whatever they typically last in the game.

Shapes can be send one by one, using either of the first three invocations, or
batched as a list of shape descriptors. Batching has this benefit that they will
be send possibly as one packet, limiting network overhead of sending many small
packets to draw several shapes at once. The drawback of sending shapes is
batches is that they need to address the same list of players, i.e. if multiple
players from the list target different players, all shapes will be sent to all
of them.

Shapes will fail to draw and raise a runtime error if not all its required
parameters are specified and all available shapes have some parameters that are
required, so make sure to have them in place:

On the client, shapes can recognize that they are being redrawn again with the
same parameters, disregarding the duration parameter. This updates the expiry on
the drawn shape to the new value, instead of adding new shape in its place. This
can be used for toggling the shapes on and off that has been send previously
with very large durations, or simply refresh the shapes periodically in more
dynamic applications.

Optional shared shape attributes:

- `color` - integer value indicating the main color of the shape in the form of
  red, green, blue and alpha components in the form of `0xRRGGBBAA`, with the
  default of `-1`, so white opaque, or `0xFFFFFFFF`.
- `player` - name or player entity to send the shape to, or a list of players.
  If specified, the shapes will appear only for the specified players
  (regardless where they are), otherwise it will be send to all players in the
  current dimension.
- `line` - (Deprecated) line thickness, defaults to 2.0pt. Not supported in
  1.17's 3.2 core GL renderer.
- `fill` - color for the faces, defaults to no fill. Use `color` attribute
  format
- `follow` - entity, or player name. Shape will follow an entity instead of
  being static. Follow attribute requires all positional arguments to be
  relative to the entity and disallow of using entity or block as position
  markers. You must specify positions as a triple.
- `snap` - if `follow` is present, indicated on which axis the snapping to
  entity coordinates occurs, and which axis will be treated statically, i.e. the
  coordinate passed in a coord triple is the actual value in the world. Default
  value is `'xyz'`, meaning the shape will be drawn relatively to the entity in
  all three directions. Using `xz` for instance makes so that the shape follows
  the entity, but stays at the same, absolute Y coordinate. Preceeding an axis
  with `d`, like `dxdydz` would make so that entity position is treated
  discretely (rounded down).
- `debug` - if True, it will only be visible when F3+B entity bounding boxes is
  enabled.
- `facing` - applicable only to `'text'`, `'block'` or '`item'` shapes, where
  its facing. Possible options are:
  - `player`: Default. Element always rotates to face the player eye position,
  - `camera`: Element is placed on the plane orthogonal to player look vector,
  - `north`, `south`, `east`, `west`, `up`, `down`: obvious

Available shapes:

- `'line'` - draws a straight line between two points.

  - Required attributes:
    - `from` - triple coordinates, entity, or block value indicating one end of
      the line
    - `to` - other end of the line, same format as `from`

- `'box'` - draws a box with corners in specified points

  - Required attributes:
    - `from` - triple coordinates, entity, or block value indicating one corner
      of the box
    - `to` - other corner, same format as `from`

- `'sphere'`:

  - Required attributes:
    - `center` - center of the sphere
    - `radius` - radius of the sphere
  - Optional attributes:
    - `level` - level of details, or grid size. The more the denser your sphere.
      Default level of 0, means that the level of detail will be selected
      automatically based on radius.

- `'cylinder'`:

  - Required attributes:
    - `center` - center of the base
    - `radius` - radius of the base circle
  - Optional attributes:
    - `axis` - cylinder direction, one of `'x'`, `'y'`, `'z'` defaults to `'y'`
    - `height` - height of the cyllinder, defaults to `0`, so flat disk. Can be
      negative.
    - `level` - level of details, see `'sphere'`.

- `'polygon'`:

  - Required attributes:
    - `points` - list of points defining vertices of the polygon
  - Optional attributes:
    - `relative` - list of bools. vertices of the polygon that affected by
      'follow'. Could be a single bools to affact allpoints too. Default means
      that every point is affacted.
    - `mode` - how those points are connected. may be "polygon"(default),"strip"
      or "triangles". "polygon" means that it will be viewed as vertices of a
      polygon center on the first one. "strip" means that it will be viewed as a
      triangles strip. "triangles" means that it will be viewed as some
      triangles that are not related to each other (therefor length of `points`
      in this mode have to be a multiple of 3).
    - `inner` - if `true` it will make the inner edges be drawn as well.
    - `doublesided` - if `true` it will make the shapes visible from the back as
      well. Default is `true`.

- `'label'` - draws a text in the world. Default `line` attribute controls main
  font color. `fill` controls the color of the background.

  - Required attributes:
    - `pos` - position
    - `text` - string or formatted text to display
  - Optional attributes
    - `value` - string or formatted text to display instead of the main `text`.
      `value` unlike `text` is not used to determine uniqueness of the drawn
      text so can be used to display smoothly dynamic elements where value of an
      element is constantly changing and updates to it are being sent from the
      server.
    - `size` - float. Default font size is 10.
    - `doublesided` - if `true` it will make the text visible from the back as
      well. Default is `false` (1.16+)
    - `align` - text alignment with regards to `pos`. Default is `center`
      (displayed text is centered with respect to `pos`), `left` (`pos`
      indicates beginning of text), and `right` (`pos` indicates the end of
      text).
    - `tilt`, `lean`, `turn` - additional rotations of the text on the canvas
      along all three axis
    - `indent`, `height`, `raise` - offsets for text rendering on X (`indent`),
      Y (`height`), and Z axis (`raise`) with regards to the plane of the text.
      One unit of these corresponds to 1 line spacing, which can be used to
      display multiple lines of text bound to the same `pos`

- `'block'`: draws a block at the specified position:

  - Required attributes:
    - `pos` - position of the object.
    - `block` - the object to show. It is a block value or a name of a block
      with optional NBT data.
  - Optional attributes:
    - `tilt`, `lean`, `turn` - additional rotations along all three axis. It
      uses the block center as the origin.
    - `scale` - scale of it in 3 axis-direction. should be a number or a list of
      3 numbers (x,y,z).
    - `skylight`, `blocklight` - light level. omit it to use local light level.
      should between 0~15.

- `'item'`: draws an item at the specified position:
  - Required attributes:
    - `pos` - position of the object.
    - `item` - the object to show. It is an item tuple or a string identified
      item that may have NBT data.
  - Optional attributes:
    - `tilt`, `lean`, `turn` - additional rotations along all three axis. for
      `block`, it use its block center as the origin.
    - `scale` - scale of it in 3 axis-direction. should be a number or a list of
      3 numbers (x,y,z).
    - `skylight`, `blocklight` - light level. omit it to use local light level.
      should between 0~15.
    - `variant` - one of `'none'`, `'thirdperson_lefthand'`,
      `'thirdperson_righthand'`, `'firstperson_lefthand'`,
      `'firstperson_righthand'`, `'head'`, `'gui'`, `'ground'`, `'fixed'`. In
      addition to the literal meaning, it can also be used to use special models
      of tridents and telescopes. This attribute is experimental and use of it
      will change in the future.
