# VCKit Web Screenshot Tool

一个轻量级的网页截图工具，专为开发者设计，用于记录开发过程和生成网页快照。

## 特性

- 🚀 轻量级，基于 Puppeteer
- 🌐 支持本地和远程网站截图
- 📁 自动按日期分类保存
- ⚡ 全局命令行工具
- 🎯 支持多种输出格式
- 🔧 丰富的自定义参数

## 安装

### 前置要求

- Node.js >= 16.0.0
- Google Chrome (macOS 系统自带)

### 全局安装

```bash
cd tools/web-screenshot
npm install
npm run install-global
```

安装完成后，可以在任何地方使用 `VCKit-web-screen` 命令。

## 使用方法

### 基本用法

```bash
VCKit-web-screen <URL>
```

### 示例

```bash
# 截图百度首页
VCKit-web-screen https://www.baidu.com

# 截图本地开发服务器
VCKit-web-screen http://localhost:3000

# 静默模式（只输出结果）
VCKit-web-screen -q https://www.google.com

# 自定义尺寸和延迟
VCKit-web-screen -w 1280 -h 720 -d 2000 https://www.github.com

# 只截取可视区域
VCKit-web-screen --no-full-page https://www.example.com
```

## 参数说明

| 参数 | 简写 | 类型 | 默认值 | 说明 |
|------|------|------|--------|------|
| `--output` | `-o` | string | `~/VCKit-Screenshots` | 输出目录 |
| `--width` | `-w` | number | `1920` | 视口宽度 |
| `--height` | `-h` | number | `1080` | 视口高度 |
| `--no-full-page` | | boolean | `false` | 不截取整个页面，仅截取可视区域 |
| `--delay` | `-d` | number | `1000` | 页面加载等待时间(ms) |
| `--quiet` | `-q` | boolean | `false` | 静默模式，只输出结果 |
| `--timeout` | | number | `10000` | 页面加载超时时间(ms) |
| `--help` | | | | 显示帮助信息 |
| `--version` | `-V` | | | 显示版本号 |

## 输出格式

### 普通模式

```
🚀 启动浏览器...
🌐 正在访问: https://www.baidu.com
⏱️  等待 1000ms...
📸 正在截图...
✅ 截图成功！
📁 保存路径: /Users/username/VCKit-Screenshots/2025-06-29/www_baidu_com_2025-06-29T12-45-57-696Z.png
```

### 静默模式 (`-q`)

```
SUCCESS|/Users/username/VCKit-Screenshots/2025-06-29/www_baidu_com_2025-06-29T12-45-57-696Z.png
```

或者错误时：

```
ERROR|错误信息
```

## 文件组织

截图文件按以下规则保存：

```
~/VCKit-Screenshots/
├── 2025-06-29/
│   ├── www_baidu_com_2025-06-29T12-45-57-696Z.png
│   ├── localhost_2025-06-29T13-20-15-123Z.png
│   └── www_google_com_2025-06-29T14-30-22-456Z.png
└── 2025-06-30/
    └── ...
```

- 按日期分文件夹
- 文件名格式：`域名_时间戳.png`
- 域名中的点号替换为下划线

## 故障排除

### 常见问题

1. **网络连接失败**
   - 检查网络连接
   - 如果使用代理，确保配置正确

2. **Chrome 未找到**
   - 确保系统已安装 Google Chrome
   - macOS 用户通常自带 Chrome

3. **权限问题**
   - 确保有写入 `~/VCKit-Screenshots/` 目录的权限

### 调试模式

使用普通模式（不加 `-q`）可以看到详细的执行过程，帮助定位问题。

## 技术实现

- **核心库**: Puppeteer 21.0.0
- **CLI 框架**: Commander.js 11.0.0
- **浏览器**: 系统 Google Chrome
- **Node.js**: >= 16.0.0

## 开发日志

完整的开发过程和问题解决记录请查看 [conversation-log.md](./conversation-log.md)。