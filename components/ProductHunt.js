import { Image } from 'grommet';
import React from 'react';

function ProductHunt({ name, id, title }) {
  return (
    <a href={`https://www.producthunt.com/posts/${name}`} target="_blank" rel="noreferrer">
      <Image
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${id}&theme=light`}
        alt={title}
        width={250}
        height={54}
      />
    </a>
  );
}

export default ProductHunt;
