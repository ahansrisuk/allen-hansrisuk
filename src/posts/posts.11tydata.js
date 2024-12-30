import { DateTime } from 'luxon'

export default {
  layout: 'post-layout.html',
  tags: ['post'],
  // overrides the date set in the frontmatter of md files
  eleventyComputed: {
    date: (data) =>
      DateTime.fromJSDate(data.date, { zone: 'utc' }).toFormat(
        'yyyy-MM-dd EEE'
      ),
  },
}
