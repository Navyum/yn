/* eslint-disable quote-props */
import type { BaseLanguage } from './en'

const data: BaseLanguage = {
  'app-name': 'Mark Note',
  'about': '關於',
  'feedback': '回饋',
  'slogan': '一款強大可擴展的 Markdown 編輯器，為生產力而生',
  'cancel': '取消',
  'undo': '撤銷',
  'ok': '確定',
  'demo-tips': 'DEMO 模式下某些功能不可用',
  'more': '更多',
  'copied': '已複製',
  'others': '其他',
  'insert-different-repo-doc': '不能插入不同倉庫的文檔',
  'need-clipboard-permission': '請授予剪貼簿權限',
  'click-to-copy': '點擊複製',
  'click-to-copy-link': '點擊複製連結',
  'copy-code': '複製程式碼',
  'loading': '載入中',
  'add-image': '添加圖片',
  'upload-image': '上傳圖片',
  'exit-presentation-msg': '按下 Esc 鍵退出展示模式',
  'reload': '重載',
  'open-in-new-window': '新視窗開啟',
  'view-figure': '查看圖形',
  'export': '匯出',
  'no-password': '未輸入密碼',
  'save': '儲存',
  'close': '關閉',
  'edit': '編輯',
  'discard': '放棄',
  'outline': '目錄',
  'files': '檔案',
  'install-extension-tips': '請先安裝並啟用 “%s” 擴充',
  'not-support-mas': '從 Mac Apple Store 中下載的應用程式不支援此擴充。',
  'learn-more': '了解更多',
  'default': '預設',
  'print': '列印',
  'markdown-file': 'Markdown 檔案',
  'encrypted-markdown-file': '加密 Markdown 檔案',
  'switch-repo-n': '切換到仓库 %s',
  'switch-the-last-repo': '切換到最後一個仓库',
  'edit-or-generate-text-using-ai': '使用 AI Copilot 編輯或生成文本',
  'file-readonly-desc': '當前文件是唯讀的。如需編輯，請先在系統中[更改為可寫](%s)，然後[刷新](%s)當前文檔。',
  'can-not-edit-this-file-type': '不能編輯此類型的文件',
  'read-only-mode-desc': '當前應用處於唯讀模式，不可編輯',
  'trigger-suggestions': '觸發提示',
  'table-of-contents': '目錄',
  'text-comparator': '文本比較器',
  'premium': {
    'confetti': '彩色紙屑',
    'need-purchase': '[%s] 需高級版',
    'buy-license': '立即購買',
    'free': '免費版',
    'premium': '高級版',
    'upgrade': '升級到高級版',
    'intro': {
      'intro': '簡介',
      'current-plan': '目前版本',
      'included': '包含內容',
      'desc': 'Mark Note 是一款開源筆記應用，自 2024 年起持續開發、更新。由於軟體的開發、維護需要用心力與資金，決定推出付費高級版。如果您想支持我的開發工作，或需要使用高級版的功能，可以選擇購買高級版。',
      'free-desc': '滿足大部分使用者需求',
      'premium-desc': '更多高級功能',
      'free-list': '基礎編輯功能\n圖形嵌入\n執行程式碼片段\nHTML 工具\n文件加密\n內建終端機\n文件歷史\n擴充套件',
      'premium-list': '基礎編輯功能\n圖形嵌入\n執行程式碼片段\nHTML 工具\n文件加密\n內建終端機\n文件歷史（加強）\n擴充套件（更多）\n巨集替換\n深色主題',
    },
    'buy': {
      'buy': '購買',
    },
    'activation': {
      'license': '激活',
      'activation': '輸入激活代碼',
      'placeholder': '請輸入激活代碼',
      'get-license': '取得激活代碼',
      'info': '激活資訊',
      'expired': '已過期',
      'expiring': '剩餘 %s 天過期',
      'need-refresh': '需要重新整理激活資訊',
      'refresh': '重新整理',
      'renewal': '續費',
      'devices': '裝置',
      'this-machine': '本機',
      'unbind': '解除綁定',
      'unbind-confirm': '確定要解除綁定「%s」嗎？',
      'name': '姓名：%s',
      'email': '電子信箱：%s',
      'expires': '有效期限至：%s',
      'plan': '方案：%s',
      'success': '激活成功',
      'activating': '激活中',
      'tips': '如果您在激活過程中遇到問題，請聯繫我',
      'tips-wechat': '微信',
      'activation-tips': '激活前請確認您的網路能正常連線到 <a href="https://yank-note.com" target="_blank">https://yank-note.com</a>',
      'offline-activation': '離線激活',
      'online-activation': '線上激活',
      'get-activation-token': '取得離線激活代碼',
    },
  },
  'app': {
    'quit': '離開',
    'preferences': '偏好設定',
    'close-window': '關閉視窗',
    'toggle-fullscreen': '切換全螢幕',
    'hide-main-window': '隱藏主視窗',
    'tray': {
      'open-main-window': '打開主視窗',
      'open-in-browser': '在瀏覽器中開啟',
      'open-main-dir': '打開主目錄',
      'preferences': '偏好設定',
      'start-at-login': '開機啟動',
      'version': '版本 %s',
      'quit': '離開',
      'dev': {
        'dev': '開發',
        'port-prod': '正式埠 (%s)',
        'port-dev': '開發埠 (%s)',
        'reload': '重新載入頁面',
        'dev-tool': '主視窗開發工具',
        'restart': '重新啟動',
        'force-quit': '強制離開',
      }
    },
    'updater': {
      'found-dialog': {
        'title': 'Mark Note - 發現新版本',
        'desc': '目前版本: %s\n新版本: %s',
        'buttons': {
          'download': '下載',
          'view-changes': '檢視更新內容',
          'download-and-view-changes': '下載並檢視更新內容',
          'cancel': '取消',
          'ignore': '忽略'
        }
      },
      'progress-bar': {
        'title': 'Mark Note - 下載',
        'detail': '下載中 %s',
        'failed': '下載失敗: %s'
      },
      'failed-dialog': {
        'title': 'Mark Note - 出現了一些錯誤',
      },
      'install-dialog': {
        'title': 'Mark Note - 下載完成',
        'desc': '新版本下載完成，是否要立即安裝？',
        'buttons': {
          'install': '安裝',
          'delay': '延後',
        }
      },
      'no-newer-dialog': {
        'title': 'Mark Note - 無新版本',
        'desc': '目前已是最新版本'
      }
    },
    'error': {
      'EADDRINUSE': '埠 (%s) 已被使用或無權限監聽，請在設定中設定其他埠'
    }
  },
  'quit-check-dialog': {
    'title': '提示',
    'desc': '有文件未儲存，是否要退出？',
    'buttons': {
      'cancel': '取消',
      'discard': '放棄儲存並退出',
    },
  },
  'save-check-dialog': {
    'title': '提示',
    'desc': '文件尚未儲存，是否要儲存？',
  },
  'change-setting-reload-main-widow-dialog': {
    'title': '提示',
    'desc': '某些設定需要重載主視窗才能生效，是否要重載？',
  },
  'file-status': {
    'unsaved': '未儲存',
    'saving': '儲存中',
    'saved': '已儲存',
    'save-failed': '儲存失敗！',
    'loaded': '載入完畢',
    'loading': '載入中…',
    'no-file': '未開啟檔案'
  },
  'modal': {
    'info': '提示',
    'input-placeholder': '請輸入...',
  },
  'document': {
    'current-path': '當前路徑： %s',
    'invalid-filename': '檔案名不能包含以下字符: %s',
    'password-create': '[創建] 請輸入密碼',
    'password-save': '[保存] 請輸入密碼',
    'password-open': '[打開] 請輸入密碼',
    'wrong-password': '密碼錯誤',
    'file-transform-error': '加密文件和非加密文件不能互相轉換',
    'custom-extension': '自訂擴展名',
    'create-dialog': {
      'title': '創建文件',
      'hint': '文件名',
    },
    'create-dir-dialog': {
      'title': '創建文件夾',
      'hint': '文件夾名',
    },
    'duplicate-dialog': {
      'title': '重複文件',
      'hint': '目標路徑',
    },
    'delete-dialog': {
      'title': '刪除文件',
      'content': '確定要刪除 [%s] 嗎？'
    },
    'force-delete-dialog': {
      'title': '刪除文件',
      'content': '移動到回收站失敗，是否要直接刪除 [%s]？'
    },
    'move-dialog': {
      'title': '移動文件',
      'content': '新的路徑'
    },
    'save-encrypted-file-dialog': {
      'title': '提示',
      'content': '密碼和上一次輸入的密碼不一致，是否用新密碼保存？',
    },
    'switch-noent-dialog': {
      'title': '文件不存在',
      'content': '文件 [%s] 不存在，是否要創建？',
    }
  },
  'status-bar': {
    'view': {
      'view': '視圖',
      'xterm': '顯示終端',
      'preview': '顯示預覽',
      'editor': '顯示編輯',
      'side-bar': '顯示側欄',
      'word-wrap': '文本換行',
      'typewriter-mode': '打字機模式',
      'editor-preview-exclusive': '編輯器/預覽互斥',
    },
    'setting': '設置',
    'repo': {
      'repo': '倉庫： %s',
      'no-data': '未選擇倉庫',
    },
    'nav': {
      'nav': '導航',
      'goto': '快速跳轉',
      'reveal-current-file-in-sidebar': '在側欄中顯示當前文件',
      'forward': '前進',
      'back': '後退',
    },
    'insert': {
      'insert': '插入',
      'paste-rt': '粘貼富文本',
      'paste-img-base64': '粘貼圖片',
    },
    'tool': {
      'tool': '工具',
      'convert-img-link': '下載外鏈圖片',
      'macro-copy-markdown': '複製宏替換後的 Markdown',
      'copy-content': '複製內容',
      'doc-history': '文檔歷史版本',
      'share-preview': '分享預覽',
      'print': '打印文檔',
      'export': '導出文檔',
      'open-text-comparator': '打開文本比較器',
    },
    'document-info': {
      'selected': '已選擇',
      'lines': '總行數',
      'chars': '字符數',
      'selections': '選擇',
    },
    'help': {
      'help': '幫助',
      'readme': '應用介紹',
      'features': '特色功能說明',
      'shortcuts': '快捷鍵',
      'guide': '使用指引',
      'plugin': '插件開發'
    },
    'terminal': '終端',
    'present': '預覽',
    'get': {
      'get-application': '獲取應用',
    },
    'extension': {
      'extension-manager': '擴展管理',
    },
    'theme': {
      'tips': '主題： %s',
      'dark': '深色',
      'light': '淺色',
      'system': '跟隨系統',
    },
  },
  'view': {
    'outline': '目錄',
    'print': '打印',
  },
  'tree': {
    'db-click-refresh': '雙擊刷新目錄樹',
    'add-repo': '添加倉庫',
    'add-repo-hint': '選擇一個位置保存筆記',
    'created-at': '創建於： %s',
    'updated-at': '更新於： %s',
    'context-menu': {
      'mark': '標記文件',
      'unmark': '取消標記',
      'duplicate': '重複文件',
      'create-doc': '創建文件',
      'create-dir': '創建文件夾',
      'add-item': '添加文件',
      'rename': '重命名 / 移動',
      'delete': '刪除',
      'open-in-os': '在系統中打開',
      'reveal-in-os': '在系統中顯示',
      'refresh': '刷新目錄',
      'open-in-terminal': '在終端中打開',
      'create-in-cd': '當前目錄創建新文件',
      'copy-name': '複製名稱',
      'copy-path': '複製路徑',
      'find-in-folder': '在文件夾中查找',
    },
    'toast': {
      'moved': '[%s] 已移動到 [%s]',
      'copied': '[%s] 已複製到 [%s]',
    },
    'sort': {
      'asc': '升序',
      'desc': '降序',
      'by-name': '按名稱 (%s)',
      'by-mtime': '按修改時間 (%s)',
      'by-birthtime': '按創建時間 (%s)',
      'by-serial': '按序號 (%s)',
    },
  },
  'tabs': {
    'close-others': '關閉其他',
    'close-right': '關閉右側所有',
    'close-left': '關閉左側所有',
    'close-all': '全部關閉',
    'pin': '固定',
    'unpin': '取消固定',
    'search-tabs': '搜索標籤頁',
    'new-tab': '新建標籤頁',
  },
  'export-panel': {
    'export': '導出',
    'format': '格式',
    'pdf': {
      'orientation': '方向',
      'portrait': '縱向',
      'landscape': '橫向',
      'size': '尺寸',
      'zoom': '縮放',
      'use-browser': '將使用瀏覽器打印功能',
      'include-bg': '包含背景',
      'generate-document-outline': '生成文檔大綱',
    },
    'use-html': '使用渲染後的 HTML 轉換',
    'use-markdown': '使用 Markdown 轉換',
    'loading': '轉換中，請稍候……',
  },
  'title-bar': {
    'pin': '置頂窗口',
    'minimize': '最小化',
    'unmaximize': '還原',
    'maximize': '最大化',
  },
  'setting-panel': {
    'setting': '設置',
    'add': '添加%s',
    'delete-warning': '確定要刪除嗎？',
    'error-choose-repo-path': '請選擇儲存位置',
    'change-keyboard-shortcuts': '更改鍵盤快捷鍵',
    'reset-title': '重置為默認值 "%s"',
    'reset-confirm-title': '注意',
    'reset-confirm-desc': '確定要重置為默認值 "%s" 嗎？',
    'schema': {
      'repos': {
        'repos': '倉庫',
        'repo': '倉庫',
        'name': '倉庫名',
        'name-placeholder': '請輸入',
        'path': '路徑',
        'path-placeholder': '請選擇一個路徑',
        'enable-indexing': '啟用索引',
      },
      'editor': {
        'mouse-wheel-zoom': '滑鼠滾輪縮放',
        'font-size': '字體大小',
        'tab-size': 'Tab 寬度',
        'ordered-list-completion': '有序清單補全',
        'minimap': '顯示小地圖',
        'line-numbers': '行號',
        'enable-preview': '開啟預覽 - 開啟新檔案使用暫存標籤，雙擊標籤以變更',
        'font-family': '字體',
        'font-ligatures': '字體連字',
        'complete-emoji': '自動補全 Emoji - 輸入 : 時顯示 Emoji 清單',
        'todo-with-time': '勾選待辦事項時自動加入時間',
        'suggest-on-trigger-characters': '自動提示 - 輸入提示符號時顯示提示。若停用，仍可使用 Ctrl+Space (依據快速鍵設定) 觸發',
        'sticky-scroll-enabled': '啟用黏性捲動 - 當編輯器捲動時，固定顯示文件標題等',
        'quick-suggestions': '快速提示 - 在輸入文字時顯示提示',
        'enable-ai-copilot-action': '啟用 AI Copilot 操作 - 當可用時顯示 AI Copilot 操作燈泡',
        'enable-trigger-suggest-bulb': '啟用觸發提示燈泡 - 當可用時顯示觸發提示燈泡',
      },
      'render': {
        'md-html': '啟用 HTML',
        'md-breaks': '將 \\n 轉換為 &lt;br&gt;',
        'md-linkify': '自動將類似 URL 的文字轉換為連結',
        'md-wiki-links': '啟用 Wiki 連結 - [[link]]',
        'md-typographer': '啟用排版美化，如 (c) -> ©',
        'md-sup': '啟用上標語法: 29^th^',
        'md-sub': '啟用下標語法: H~2~O',
        'md-emoji': '啟用 Emoji 語法: :smile:',
        'multimd-multiline': '[markdown-it-multimd-table]: 啟用 multiline 語法',
        'multimd-rowspan': '[markdown-it-multimd-table]: 啟用 rowspan 語法',
        'multimd-headerless': '[markdown-it-multimd-table]: 啟用 headerless 語法',
        'multimd-multibody': '[markdown-it-multimd-table]: 啟用 multibody 語法',
      },
      'view': {
        'default-previewer-max-width': '預覽區最大寬度',
        'default-previewer-max-width-desc': '≤ 100 為百分比，> 100 為像素',
      },
      'theme': '主題',
      'language': '語言',
      'custom-css': '自訂 CSS',
      'assets-dir': '圖片存放目錄',
      'assets-desc': '支援相對路徑和絕對路徑（限於倉庫內部）,可用變數：docName, docBasename, docSlug, docHash, docPath, date',
      'assets': {
        'path-type': '路徑類型',
      },
      'shell': 'Shell',
      'envs': '環境變數',
      'auto-save': '自動儲存',
      'plantuml-api': 'PlantUML 端點',
      'updater': {
        'source': '更新來源',
      },
      'doc-history': {
        'number-limit': '版本保留數',
      },
      'search': {
        'number-limit': '搜尋結果限制',
      },
      'server': {
        'host': '監聽主機',
        'port': '監聽埠',
        'port-desc': '需要重啟應用',
      },
      'tree': {
        'exclude': '排除檔案',
      },
      'proxy': {
        'enabled': '啟用代理',
        'server': '代理伺服器',
        'bypass-list': 'Bypass List',
        'pac-url': 'PAC URL',
      },
      'macros': {
        'macros': '巨集',
        'match': '配對',
        'replace': '替換',
        'match-placeholder': '%foo%',
        'replace-placeholder': '%foo% -> BAR',
      },
      'keep-running-after-closing-window': '關閉視窗後保持執行',
      'hide-main-window-on-startup': '啟動時隱藏主視窗',
    },
    'tabs': {
      'repos': '倉庫',
      'appearance': '外觀',
      'editor': '編輯器',
      'render': '渲染',
      'image': '圖片',
      'proxy': '代理',
      'macros': '巨集替換',
      'other': '其他',
    },
  },
  'quick-open': {
    'input-placeholder': '輸入字元……',
    'empty': '無結果',
    'files': '快速跳轉',
    'marked': '已標記',
  },
  'editor': {
    'context-menu': {
      'paste-image': '貼上圖片',
      'paste-image-as-base64': '貼上圖片為 Base64',
      'paste-rt-as-markdown': '貼上富文本為 Markdown',
      'add-attachment': '添加附件',
      'link-doc': '連結文件',
      'link-file': '連結文件',
      'insert-date': '插入當前日期',
      'insert-time': '插入當前時間',
      'reveal-line-in-preview': '在預覽中聚焦',
      'force-insert-new-line': '強制插入新行',
      'force-insert-indent': '強制插入縮進',
    },
    'switch-editor': '切換編輯器',
    'default-editor': '默認編輯器',
    'action-label': {
      'reveal-current-file-in-os': '在系統中顯示當前文件',
      'refresh-current-document': '刷新當前文件',
    }
  },
  'previewer': {
    'default-previewer': '預設預覽器',
    'switch-previewer': '切換預覽器',
  },
  'picgo': {
    'setting': {
      'api-title': 'PicGo 介面',
      'api-desc': 'PicGo 預設介面地址：http://127.0.0.1:36677/upload',
      'api-msg': '必須以 http:// 開頭',
      'paste-title': '貼上圖片使用 PicGo 圖床'
    },
    'uploading': '上傳中……',
    'upload-failed': '上傳失敗',
    'need-api': '請先設定 PicGo 圖床介面地址',
    'upload-all-images': '上傳所有圖片',
  },
  'code-run': {
    'run': '執行',
    'stop': '停止',
    'run-in-xterm-tips': '在終端中執行程式碼，%s + 點擊不退出解釋器',
    'run-in-xterm': '終端中執行',
    'running': '執行中……',
    'clear': '清除',
  },
  'mind-map': {
    'zoom-in': '放大',
    'zoom-out': '縮小',
    'fit-height': '適應高度',
    'switch-layout': '切換佈局',
    'switch-loose': '緊湊/寬鬆',
    'convert-error': '轉換錯誤\n    1. 請保證大綱只有一個根項目\n    2. 請保證大綱層級正確',
  },
  'table-cell-edit': {
    'esc-to-cancel': 'ESC 取消',
    'db-click-edit': '雙擊編輯',
    'canceled': '已取消編輯',
    'edit-hint': '單元格內容',
    'edit-title': '編輯單元格',
    'edit-error': '編輯出錯',
    'limit-single-line': '只支援編輯單行文字',
    'context-menu': {
      'edit': '編輯',
      'quick-edit': '快速編輯',
      'sort-mode': '排序模式',
      'sort-asc': '升序',
      'sort-desc': '降序',
      'align-left': '左對齊',
      'align-center': '置中',
      'align-right': '右對齊',
      'align-normal': '取消對齊',
      'add-row-above': '在上面新增列',
      'add-row-below': '在下面新增列',
      'delete-row': '刪除列',
      'add-col-left': '在左邊新增列',
      'add-col-right': '在右邊新增列',
      'delete-col': '刪除列',
    },
  },
  'markdown-link': {
    'convert-to-titled-link': '轉換為帶標題的連結',
  },
  'custom-css': {
    'change-confirm': {
      'title': '提示',
      'content': '更改自訂 CSS 需要重新載入頁面，是否繼續？',
    }
  },
  'control-center': {
    'control-center': '控制中心 %s',
    'switch': {
      'side-bar': '側欄 %s',
      'editor': '編輯器 %s',
      'view': '預覽 %s',
      'sync-scroll': '同步捲動',
      'sync-rendering': '同步渲染',
      'word-wrap': '編輯器換行 %s',
      'typewriter-mode': '打字機模式',
      'find-in-preview': '在預覽中查找 %s',
    },
    'navigation': {
      'goto': '跳轉 %s',
      'forward': '前進 %s',
      'back': '後退 %s',
      'refresh': '刷新 %s',
    }
  },
  'doc-history': {
    'clear': '清空',
    'apply-version': '應用選中版本',
    'no-history': '無歷史版本',
    'content': '內容',
    'diff': '對比',
    'history': '歷史',
    'current': '當前',
    'all': '全部',
    'marked': '已標記',
    'mark': '標記',
    'unmark': '取消標記',
    'delete': '刪除',
    'edit-message': '編輯訊息',
    'delete-dialog': {
      'title': '刪除版本',
      'content': '你確定要刪除版本 [%s] 嗎？',
    },
    'clear-dialog': {
      'title': '清除版本',
      'content': '你確定要清除未標記的版本嗎？',
    },
    'mark-dialog': {
      'title': '標記版本 [%s]',
      'hint': '輸入一些訊息（可選）',
    },
    'content-too-long-alert': {
      'title': '警告',
      'content': '出於效能考量，超過 [%s] 字元的文檔將不會儲存歷史。目前文檔長度為 [%s] 字元。',
    },
  },
  'copy-content': {
    'options': '選項: ',
    'type': '複製類型: ',
    'inline-style': '內聯樣式',
    'include-style': '包含樣式',
    'include-toc': '包含目錄',
    'inline-image': '內聯本地圖片',
    'upload-image': '上傳本地圖片',
    'highlight-code': '高亮代碼',
    'rt': '富文本',
    'complete': '轉換完成，點選確定複製',
    'copy-tips': '如需複製部分內容，需要預覽區選取後再操作',
    'copy-tips-selected': '複製選取的內容，%s 個字元',
  },
  'share-preview': {
    'expire': '到期',
    'tips': '請先在設定中設定監聽主機 “0.0.0.0”',
  },
  'electron-zoom': {
    'zoom-in': '放大',
    'zoom-out': '縮小',
    'zoom-reset': '實際大小',
  },
  'extension': {
    'extension-manager': '擴充功能管理',
    'all': '全部',
    'installed': '已安裝',
    'official': '官方',
    'unofficial': '非官方',
    'unknown': '未知',
    'author': '作者',
    'origin': '來源',
    'unpacked-size': '解包大小',
    'latest-version': '最新版本',
    'installed-version': '已安裝版本',
    'homepage': '主頁',
    'download': '下載',
    'toast-loaded': '擴充功能加載成功',
    'upgradable': '可升級',
    'incompatible': '不兼容',
    'not-installed': '未安裝',
    'enabled': '已啟用',
    'disabled': '已停用',
    'reload-required': '需要重載',
    'no-extension': '沒有擴充功能',
    'reload': '重載',
    'install': '安裝',
    'installing': '正在安裝',
    'uninstalling': '正在移除',
    'uninstall': '移除',
    'upgrade': '升級',
    'disable': '停用',
    'enable': '啟用',
    'uninstall-confirm': '你確定要移除擴充功能 [%s] 嗎？',
    'registry': '倉庫源',
    'activation-time': '啟用時間',
    'requirement': '需要',
    'auto-upgrade': '自動升級',
    'unknown-origin-tips': '使用未知來源的擴充功能可能有風險，仍然要啟用嗎？',
    'extensions-auto-upgraded': '%s 個擴充功能已升級',
    'fetch-registry-failed': '取得擴充功能倉庫失敗，請切換到其他倉庫源或稍後再試',
  },
  'get-started': {
    'get-started': '開始使用',
    'start': '開始',
    'help': '幫助',
    'recent': '最近開啟',
  },
  'search-panel': {
    'search-files': '搜尋檔案',
    'replace-files': '替換檔案',
    'replace-confirm-title': '替換文件',
    'replace-confirm-content': '確定要替換所有匹配的文件（%s 個）嗎？注意此操作不可撤銷。',
    'placeholder-search': '搜尋',
    'placeholder-replace': '替換',
    'replace-all': '全部替換',
    'for-history': '(⇅ 切換歷史)',
    'files-to-include': '包含檔案',
    'files-to-exclude': '排除檔案',
    'match-case': '區分大小寫',
    'match-whole-word': '匹配整詞',
    'use-regex': '使用正則表達式',
    'expand-all': '展開所有',
    'collapse-all': '摺疊所有',
  },
  'file-changed-alert': {
    'title': '檔案已變更',
    'content': '檔案已被其他應用程式變更，是否重新載入？',
    'reload': '重新載入',
  },
  'command-desc': {
    'base_find-in-repository': '在倉庫中查找內容',
    'control-center_toggle': '展示/隱藏控制中心',
    'doc_show-history': '顯示文件歷史',
    'editor_toggle-wrap': '啟用/禁用編輯器換行',
    'file-tabs_close-current': '關閉目前標籤頁',
    'file-tabs_search-tabs': '搜尋標籤頁',
    'file-tabs_show-welcome': '顯示歡迎頁',
    'file-tabs_switch-left': '切換到左側標籤頁',
    'file-tabs_switch-right': '切換到右側標籤頁',
    'layout_toggle-editor': '顯示/隱藏編輯器',
    'layout_toggle-side': '顯示/隱藏側欄',
    'layout_toggle-view': '顯示/隱藏預覽',
    'layout_toggle-xterm': '顯示/隱藏終端',
    'plugin_copy-content_copy-content': '顯示複製內容面板',
    'plugin_document-history-stack_back': '返回上一個文件',
    'plugin_document-history-stack_forward': '前進到下一個文件',
    'plugin_editor_focus-editor': '聚焦編輯器',
    'plugin_switch-todo_switch': '勾選/取消勾選待辦事項（需在編輯器中選取內容）',
    'plugin_view-links_view-document-links': '顯示文件中的連結',
    'view_enter-presentation': '進入簡報模式',
    'workbench_show-quick-open': '顯示快速跳轉',
    'workbench_toggle-outline': '顯示/隱藏目錄',
    'plugin_electron-zoom_zoom-in': '放大',
    'plugin_electron-zoom_zoom-out': '縮小',
    'plugin_electron-zoom_zoom-reset': '重置縮放',
    'view_refresh': '重新整理預覽',
    'extension_show-manager': '開啟擴充功能管理員',
    'keyboard-shortcuts_show-manager': '開啟鍵盤快速鍵管理員',
    'plugin_image-localization_all': '下載所有外鏈圖片',
    'tree_refresh': '重新整理檔案樹',
    'plugin_status-bar-theme_switch': '切換主題',
    'editor_rotate-custom-editors': '輪換自訂編輯器',
    'view_show-find-in-preview-widget': '顯示在預覽中查找',
    'tree_reveal-current-node': '在檔案樹中顯示目前檔案',
  },
  'keyboard-shortcuts': {
    'workbench': '工作台',
    'editor': '編輯器',
    'application': '應用',
    'keyboard-shortcuts': '鍵盤快捷鍵',
    'unavailable': '不可用',
    'command': '命令',
    'keybinding': '快捷鍵',
    'not-set': '未設定',
    'clear': '清除',
    'change': '更改',
    'reset': '重置',
    'search': '輸入以搜尋，「*」搜尋已更改',
    'empty': '無結果',
    'recorder': {
      'tip': '按下想要的鍵組合，然後按 Enter，按 ESC 取消。',
      'conflict-commands': '存在 %s 個命令使用了相同的快捷鍵',
    },
    'conflict': '衝突',
    'conflict-title': '衝突的快捷鍵 (%s)',
    'conflict-commands': '下面的命令使用了相同的快捷鍵：',
  },
  'find-in-preview': {
    'action-tips': {
      'prev': '上一個 (Shift + Enter)',
      'next': '下一個 (Enter)',
      'close': '關閉 (Esc)',
    },
    'toast-no-more': '沒有更多',
    'results': '%s 個匹配',
  },
  'view-context-menu': {
    'copy-image': '複製圖片',
    'delete-image': '刪除圖片',
    'open-in-new-tab': '在新標籤中打開',
  },
  'index-status': {
    'switch-repository-html': '請 <a href="javascript:void(0)" data-command="switch-repository">切換到倉庫 [<strong>%s</strong>]</a> 以使用此功能。',
    'enable-indexing-html': '請 <a href="javascript:void(0)" data-command="enable-indexing">為倉庫 [<strong>%s</strong>] 啟用索引</a> 以使用此功能。',
    'indexing': '索引中...',
    'indexed': '已索引',
  },
  'view-links': {
    'view-links': '查看連結',
    'links': '連結',
    'resources': '資源',
    'back-links': '反向連結',
    'no-result': '無結果',
    'links-in': '“%s”中的連結',
    'resources-in': '“%s”中的資源',
    'back-links-for': '“%s”的反向連結',
    're-index': '重新索引',
    'disable-index': '停用索引',
  },
  'insert-table': {
    'insert-table': '插入表格',
    'insert': '插入',
    'compact': '緊湊',
  },
}

export default data
