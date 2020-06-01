const plugins = [];

// 打包时删除 console 的配置，如不需要可以删除
if (['production', 'prod'].includes(process.env.NODE_ENV)) {
 plugins.push("transform-remove-console")
}

// 按需引入element-ui组件
plugins.push([
  "component", {
    "libraryName": "element-ui",
    "styleLibraryName": "theme-chalk"
  }
])

// // 按需引入iview组件
// plugins.push([
//   "import", {
//     "libraryName": "view-design",
//     "libraryDirectory": "src/components"
//   }
// ])
 
module.exports = {
 presets: [
  [
   "@vue/app",
   {
    "useBuiltIns": "entry",
    polyfills: [
     'es6.promise',
     'es6.symbol'
    ]
   }
  ]
 ],
 plugins: plugins
}
