import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // enables SPA fallback routing in Amplify
      precompress: false
    }),
	prerender: {
		entries: ['*']
	}
  }
};