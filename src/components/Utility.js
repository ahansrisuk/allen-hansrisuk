import anime from 'animejs';

export default {
  name: 'Utility',
  methods: {
    mouseOver(e) {
      anime.remove(e.target);
      anime({
        targets: e.target,
        scale: 1.05,
      });
    },
    mouseLeave(e) {
      anime.remove(e.target);
      anime({
        targets: e.target,
        scale: 1,
      });
    },
  },
};
