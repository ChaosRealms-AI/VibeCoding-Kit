# VibeCoding Kit

开发者工具集合，提供各种实用的命令行工具来提高开发效率。

## 工具列表

### 🖼️ Web Screenshot Tool

**位置**: `tools/web-screenshot/`

**功能**: 轻量级网页截图工具，专为开发者设计

**主要特性**:
- 支持本地和远程网站截图
- 自动按日期分类保存到 `~/VCKit-Screenshots/`
- 全局命令行工具 `VCKit-web-screen`
- 支持多种自定义参数（尺寸、延迟、输出格式等）
- 静默模式支持，便于脚本集成

**使用场景**:
- 记录开发过程中的页面状态
- 生成项目文档的截图
- 自动化测试中的视觉验证
- 本地开发服务器的快照记录

**快速开始**:
```bash
cd tools/web-screenshot
npm install
npm run install-global

# 使用
VCKit-web-screen https://www.example.com
VCKit-web-screen -q http://localhost:3000
```

**详细文档**: [tools/web-screenshot/README.md](./tools/web-screenshot/README.md)

### 🚀 Proxy Speed Test Tool

**位置**: `tools/proxy-speed-test/`

**功能**: IP代理测速工具，用于测试和比较不同代理服务器的响应速度

**主要特性**:
- 可配置代理列表，支持用户自定义IP和端口
- 多目标测试，同时测试多个网站的连接速度
- 智能排序，自动按响应时间推荐最佳代理
- 详细报告，显示成功率、平均响应时间等统计
- 隐私保护，配置文件存储在用户主目录
- 全局命令行工具 `VCKit-proxy-test`

**使用场景**:
- 代理服务器性能测试
- 网络连接质量评估
- 代理配置优化选择
- 开发环境网络调试

**快速开始**:
```bash
cd tools/proxy-speed-test
npm install
npm run install-global

# 使用
VCKit-proxy-test          # 直接测速
VCKit-proxy-test config   # 查看配置
VCKit-proxy-test edit     # 编辑配置
```

**详细文档**: [tools/proxy-speed-test/README.md](./tools/proxy-speed-test/README.md)

---

## 项目结构

```
VibeCoding-Kit/
├── README.md                    # 项目总览
└── tools/                       # 工具集合
    ├── web-screenshot/          # 网页截图工具
    │   ├── README.md            # 工具详细文档
    │   ├── package.json         # 项目配置
    │   ├── conversation-log.md  # 开发日志
    │   ├── src/                 # 源代码
    │   │   └── index.js         # 主要功能实现
    │   └── bin/                 # 全局命令
    │       └── vckit-web-screen.js
    └── proxy-speed-test/        # IP代理测速工具
        ├── README.md            # 工具详细文档
        ├── package.json         # 项目配置
        ├── src/                 # 源代码
        │   └── index.js         # 主要功能实现
        └── bin/                 # 全局命令
            └── vckit-proxy-test.js
```

## 安装与使用

每个工具都是独立的 npm 包，可以单独安装和使用。

### 全局安装所有工具

```bash
# 克隆仓库
git clone https://github.com/ChaosRealms-AI/VibeCoding-Kit.git
cd VibeCoding-Kit

# 安装 Web Screenshot Tool
cd tools/web-screenshot
npm install
npm run install-global

# 安装 Proxy Speed Test Tool
cd ../proxy-speed-test
npm install
npm run install-global
```

### 单独使用工具

每个工具目录下都有独立的 `package.json` 和 `README.md`，可以单独安装使用。

## 贡献

欢迎提交 Issue 和 Pull Request！

每个工具都包含完整的开发日志（`conversation-log.md`），记录了开发过程、问题解决和功能演进。

## 许可证

MIT License

---

**VibeCoding Team** - 专注于开发效率工具