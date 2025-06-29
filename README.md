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

---

## 项目结构

```
VibeCoding-Kit/
├── README.md                    # 项目总览
└── tools/                       # 工具集合
    └── web-screenshot/          # 网页截图工具
        ├── README.md            # 工具详细文档
        ├── package.json         # 项目配置
        ├── conversation-log.md  # 开发日志
        ├── src/                 # 源代码
        │   └── index.js         # 主要功能实现
        └── bin/                 # 全局命令
            └── vckit-web-screen.js
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