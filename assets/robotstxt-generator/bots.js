const bots = {
  "*": {
    "description": "All robots"
  },
  // Google bots: https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers
  "Googlebot": {
    "description": "Google's crawler"
  },
  "Googlebot-Image": {
    "description": "Google's image content crawler"
  },
  "Googlebot-Video": {
    "description": "Google's video content crawler"
  },
  "Googlebot-News": {
    "description": "Google's news crawler"
  },
  "Storebot-Google": {
    "description": "Google's crawler for shopping content"
  },
  "Google-InspectionTool": { description: "Google's inspection tool crawler" },
  "GoogleOther": { description: "Google's generic crawler, for public data" },
  "GoogleOther-Image": { description: "Google's generic image crawler" },
  "GoogleOther-Video": { description: "Google's generic video crawler" },
  "Google-CloudVertexBot": { description: "Google's crawler for Vertex AI Agents" },
  "Google-Extended": { description: "Google's extended crawler for Gemini & Vertex AI APIs" },
  // Microsoft bots: https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0
  "Bingbot": {
    "description": "Microsoft Bing"
  },
  "AdIdxBot": {
    "description": "Microsoft Bing Ads bot"
  },
  "BingPreview": {
    "description": "Microsoft Bing bot to generate page snapshots"
  },
  "MicrosoftPreview": {
    "description": "Microsoft bot to generate page snapshots"
  },
  // Yandex: https://yandex.com/support/webmaster/robot-workings/check-yandex-robots.html
  "YandexBot": {
    "description": "Yandex search"
  },
  "YandexAdNet": {
    "description": "Yandex Ad network bot"
  },
  "YandexBlogs": {
    "description": "Yandex blogs bot"
  },
  "YandexForDomain": {
    "description": "Yandex domain verification bot"
  },
  "YandexImages": {
    "description": "Yandex bot for images content"
  },
  "YandexImageResizer": {
    "description": "Yandex mobile service bot"
  },
  "YandexMarket": {
    "description": "Yandex market bot"
  },
  "YandexNews": {
    "description": "Yandex news bot"
  },
  "YandexOntoDB": {
    "description": "Yandex information card bot"
  },
  "YandexPagechecker": {
    "description": "Yandex bot for validating page microdata"
  },
  "YandexSitelinks": {
    "description": "Yandex bot to check page availability"
  },
  "YandexSpravBot": {
    "description": "Yandex business tracker bot"
  },
  "YandexTurbo": {
    "description": "Yandex bot crawling RSS to generate turbo pages"
  },
  "YandexVertis": {
    "description": "Yandex search bot"
  },
  "YandexVerticals": {
    "description": "Yandex classifieds bot"
  },
  "YandexVideo": {
    "description": "Yandex video bot"
  },
  "YandexWebmaster": {
    "description": "Yandex Webmaster bot"
  },
  // Miscellaneous bots
  "Slurp": {
    "description": "Yahoo's bot"
  },
  "Baiduspider": {
    "description": "Baidu search"
  },
  "DuckDuckBot": {
    "description": "DuckDuckGo"
  },
  "Applebot": {
    "description": "Apple's Siri and Spotlight"
  },
  "facebookexternalhit": {
    "description": "Facebook"
  },
  "LinkedInBot": {
    "description": "LinkedIn"
  },
  "Twitterbot": {
    "description": "Twitter"
  },
  "PinterestBot": {
    "description": "Pinterest"
  },
  // AI/LLM crawlers: https://github.com/ai-robots-txt/ai.robots.txt/blob/main/robots.json
  "AI2Bot": {
    "description": "Finds web content in specific domains"
  },
  "Ai2Bot-Dolma": {
    "description": "Finds web content in specific domains"
  },
  "Amazonbot": {
    "description": "References crawled websites for Alexa answers"
  },
  "anthropic-ai": {
    "description": "Scrapes data to train LLMs and AI products offered by Anthropic"
  },
  "Applebot-Extended": {
    "description": "Trains Apple's foundation models powering generative AI features across Apple products"
  },
  "CCBot": {
    "description": "Web archive going back to 2008"
  },
  "ChatGPT-User": {
    "description": "Used by plugins in ChatGPT"
  },
  "Claude-Web": {
    "description": "Scrapes data to train LLMs and AI products offered by Anthropic"
  },
  "ClaudeBot": {
    "description": "Scrapes data to train LLMs and AI products offered by Anthropic"
  },
  "cohere-ai": {
    "description": "Retrieves data based on user prompts by Cohere AI"
  },
  "cohere-training-data-crawler": {
    "description": "Web crawler for Cohere's LLMs"
  },
  "Diffbot": {
    "description": "Parses web pages into structured data for www.diffbot.com"
  },
  "DuckAssistBot": {
    "description": "DuckAssistBot is used by DuckDuckGo's DuckAssist feature to fetch content and generate realtime AI answers"
  },
  "FacebookBot": {
    "description": "Trains Meta's speech recognition technology"
  },
  "FriendlyCrawler": {
    "description": "Builds datasets for machine learning experiments"
  },
  "GPTBot": {
    "description": "Trains OpenAI's current and future models"
  },
  "iaskspider/2.0": {
    "description": "Provides answers to user queries"
  },
  "ICC-Crawler": {
    "description": "Trains AI technologies and supports research"
  },
  "ImagesiftBot": {
    "description": "Indexes images for web intelligence products"
  },
  "img2dataset": {
    "description": "Downloads images for LLM training datasets"
  },
  "ISSCyberRiskCrawler": {
    "description": "Trains ML models to quantify cyber risk by ISS-Corporate"
  },
  "Kangaroo Bot": {
    "description": "Kangaroo Bot is used by the company Kangaroo LLM"
  },
  "Meta-ExternalAgent": {
    "description": "Trains models and improves Meta's products"
  },
  "Meta-ExternalFetcher": {
    "description": "Fetches links for Meta AI products"
  },
  "OAI-SearchBot": {
    "description": "Surfaces results in SearchGPT"
  },
  "omgili": {
    "description": "Crawls data for APIs and LLM training for Omgili search engine"
  },
  "omgilibot": {
    "description": "Legacy crawler still used by Webz.io for Omgili search engine"
  },
  "PanguBot": {
    "description": "Trains Huawei's PanGu multimodal LLM"
  },
  "PerplexityBot": {
    "description": "Answers queries for Perplexity users"
  },
  "PetalBot": {
    "description": "Supports Huawei search and AI services"
  },
  "Scrapy": {
    "description": "Extracts data for AI training"
  },
  "Sidetrade indexer bot": {
      "description": "Trains AI for business insights"
  },
  "Timpibot": {
    "description": "Makes data available for training AI models"
  },
  "VelenPublicWebCrawler": {
    "description": "Builds datasets for machine learning models"
  },
  "Webzio-Extended": {
    "description": "Webzio-Extended is a web crawler used by Webz.io"
  },
  "YouBot": {
    "description": "Supports You.com search and LLMs"
  }
};
