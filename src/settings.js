/*
 * @Author: yeyuhang
 * @Date: 2020-10-28 14:12:30
 * @LastEditTime: 2020-10-28 14:51:35
 * @LastEditors: yeyuhang
 * @Descripttion: 头部注释
 */
module.exports = {
  title: 'vAdmin',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
 * @type {string} light | dark
 * @description navbar theme
 */
  navbarTheme: 'light',

  /**
 * @type {string} light | dark
 * @description header theme
 */
  headerTheme: 'dark',

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',

  /**
 * @type {boolean} true | false
 * @description Whether collapsed Menu
 */
  collapsed: false
}
