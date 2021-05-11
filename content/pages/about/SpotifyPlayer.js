/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

/**
 * Spotify player iframe widget
 *
 * @author Alexander Wallin <office@alexanderwallin.com>
 * @see https://developer.spotify.com/technologies/widgets/spotify-play-button/
 */

import React from "react";

const sizePresets = {
  large: {
    width: '100%',
    height: 380,
  },
  compact: {
    width: 300,
    height: 80,
  },
};

const SpotifyPlayer = ({ src, size = 'large' }) => (
  <iframe
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"
    title="Spotify"
    src={src}
    width={sizePresets[size].width}
    height={sizePresets[size].height}
  />
);

export default SpotifyPlayer;
