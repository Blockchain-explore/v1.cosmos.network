/* global RSSParser */
import "rss-parser/dist/rss-parser.min.js"

const state = {
  posts: []
}

const mutations = {
  async initializeBlog(state) {
    const parser = new RSSParser()
    // https://github.com/allinbits/design/issues/374
    // TODO: update https://blogrss.cosmos.network/
    let feed = await parser.parseURL("https://cosmos-blog.glitch.me/")
    state.posts = feed.items
  }
}

export default { state, mutations }
