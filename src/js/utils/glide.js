import Glide from '@glidejs/glide';
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.css';
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.css';

new Glide('.glide', {
  type: 'carousel',
  autoplay: 4000,
  keyboard: true,
}).mount();
