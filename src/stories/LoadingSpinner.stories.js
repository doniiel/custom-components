import LoadingSpinner from '../components/Others/LoadingSpinner.vue'

//👇 This default export determines where your story goes in the story list
export default {
  component: LoadingSpinner,
  title: 'Others/LoadingSpinner',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args, { argTypes }) => ({
    components: { LoadingSpinner },
    props: Object.keys(argTypes),
    template: '<LoadingSpinner v-bind="$props" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};