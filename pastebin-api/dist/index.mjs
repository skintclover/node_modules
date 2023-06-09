// src/PasteClient.ts
import { XMLParser } from "fast-xml-parser";

// src/fetch.ts
import { request } from "undici";
async function fetch(url, options) {
  return request(url, options);
}

// src/PasteClient.ts
var ERROR_PREFIX = "[pastebin-api]:";
var PasteClient = class {
  constructor(options) {
    this.domain = "pastebin.com";
    this.parser = new XMLParser();
    if (!options) {
      throw new TypeError(`${ERROR_PREFIX} 'options' must be type 'string' or type 'object'`);
    }
    if (typeof options === "string") {
      this.apiKey = options;
    } else {
      this.apiKey = options.apiKey;
      this.domain = options.domain ?? "pastebin.com";
    }
  }
  get pasteBinUrl() {
    return `https://${this.domain}/api/api_post.php`;
  }
  get loginUrl() {
    return `https://${this.domain}/api/api_login.php`;
  }
  get rawUrl() {
    return `https://${this.domain}/api/api_raw.php`;
  }
  async createPaste(options) {
    if (options.name && options.name.length > 100) {
      throw new TypeError(`${ERROR_PREFIX} Name of paste cannot be longer than 100 characters`);
    }
    const res = await fetch(this.pasteBinUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        api_dev_key: this.apiKey,
        api_option: "paste",
        api_paste_name: options.name ?? "Untitled",
        api_paste_code: options.code,
        api_paste_format: options.format ?? "javascript",
        api_paste_private: options.publicity ?? 0,
        api_paste_expire_date: options.expireDate ?? "N",
        api_user_key: options.apiUserKey ?? "",
        api_folder_key: options.folderKey ?? ""
      })
    });
    const url = await res.body.text();
    if (url.toLowerCase().startsWith("bad api request")) {
      return Promise.reject(url);
    }
    return url;
  }
  async getPastesByUser(options) {
    if (options.limit && (options.limit < 1 || options.limit > 1e3)) {
      throw new TypeError(`${ERROR_PREFIX} Limit cannot be lower than 1 or higher than 1000`);
    }
    if (!options.userKey) {
      throw new TypeError(`${ERROR_PREFIX} 'userKey' must be provided (PasteClient#getPastesByUser)`);
    }
    const res = await fetch(this.pasteBinUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        api_dev_key: this.apiKey,
        api_user_key: options.userKey,
        api_results_limit: options.limit,
        api_option: "list"
      })
    });
    const data = await res.body.text();
    if (data.toLowerCase().startsWith("bad api request")) {
      return Promise.reject(data);
    }
    if (data.toLowerCase().startsWith("no pastes found")) {
      return [];
    }
    const parsed = this.parser.parse(data);
    if (Array.isArray(parsed["paste"])) {
      return parsed["paste"];
    }
    return [parsed["paste"]];
  }
  async deletePasteByKey(options) {
    if (!options.userKey) {
      throw new TypeError(`${ERROR_PREFIX} 'userKey' must be provided (PasteClient#deletePasteByKey)`);
    }
    if (!options.pasteKey) {
      throw new TypeError(`${ERROR_PREFIX} 'pasteKey' must be provided (PasteClient#deletePasteByKey)`);
    }
    const res = await fetch(this.pasteBinUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        api_dev_key: this.apiKey,
        api_option: "delete",
        api_paste_key: options.pasteKey,
        api_user_key: options.userKey
      })
    });
    const data = await res.body.text();
    if (data.toLowerCase().startsWith("bad api request")) {
      return Promise.reject(data);
    }
    return data.toLowerCase().startsWith("paste removed");
  }
  async getRawPasteByKey(options) {
    if (!options.userKey) {
      throw new TypeError(`${ERROR_PREFIX} 'userKey' must be provided (PasteClient#getRawPasteByKey)`);
    }
    if (!options.pasteKey) {
      throw new TypeError(`${ERROR_PREFIX} 'pasteKey' must be provided (PasteClient#getRawPasteByKey)`);
    }
    const res = await fetch(this.rawUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        api_option: "show_paste",
        api_dev_key: this.apiKey,
        api_user_key: options.userKey,
        api_paste_key: options.pasteKey
      })
    });
    const data = await res.body.text();
    if (data.toLowerCase().startsWith("bad api request")) {
      return Promise.reject(data);
    }
    return data;
  }
  async login(name, password) {
    const res = await fetch(this.loginUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        api_dev_key: this.apiKey,
        api_user_name: name,
        api_user_password: password
      })
    });
    const data = await res.body.text();
    if (data.toLowerCase().startsWith("bad api request")) {
      return Promise.reject(data);
    }
    return data;
  }
  encode(data) {
    let string = "";
    for (const [key, value] of Object.entries(data)) {
      if (!value)
        continue;
      string += `&${encodeURIComponent(key)}=${encodeURIComponent(`${value}`)}`;
    }
    return string.substring(1);
  }
};

// src/types.ts
var Publicity = /* @__PURE__ */ ((Publicity2) => {
  Publicity2[Publicity2["Public"] = 0] = "Public";
  Publicity2[Publicity2["Unlisted"] = 1] = "Unlisted";
  Publicity2[Publicity2["Private"] = 2] = "Private";
  return Publicity2;
})(Publicity || {});
var ExpireDate = /* @__PURE__ */ ((ExpireDate2) => {
  ExpireDate2["Never"] = "N";
  ExpireDate2["TenMinutes"] = "10M";
  ExpireDate2["OneHour"] = "1H";
  ExpireDate2["OneDay"] = "1D";
  ExpireDate2["OneWeek"] = "1W";
  ExpireDate2["TwoWeeks"] = "2W";
  ExpireDate2["OneMonth"] = "1M";
  ExpireDate2["SixMonths"] = "6M";
  ExpireDate2["OneYear"] = "1Y";
  return ExpireDate2;
})(ExpireDate || {});

// src/index.ts
var src_default = PasteClient;
export {
  ExpireDate,
  PasteClient,
  Publicity,
  src_default as default
};
