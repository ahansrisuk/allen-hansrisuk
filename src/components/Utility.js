import anime from 'animejs';

export default {
  name: 'Utility',
  methods: {
    mouseOver(e) {
      anime({
        targets: e.target,
        scale: [1, 1.05],
      });
    },
    mouseLeave(e) {
      anime({
        targets: e.target,
        scale: [1.05, 1],
      });
    },
  },
};
