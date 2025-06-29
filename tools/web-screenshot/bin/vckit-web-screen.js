#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const os = require('os');

// 导入主要功能
const takeScreenshot = async (url, options = {}) => {
  const puppeteer = require('puppeteer');
  
  const defaultOutput = path.join(os.homedir(), 'VCKit-Screenshots');
  const {
    output = defaultOutput,
    width = 1920,
    height = 1080,
    fullPage = true,
    delay = 1000,
    quiet = false,
    timeout = 10000
  } = options;

  try {
    // 创建输出目录
    const outputDir = path.resolve(output);
    const dateDir = path.join(outputDir, new Date().toISOString().split('T')[0]);
    
    if (!fs.existsSync(dateDir)) {
      fs.mkdirSync(dateDir, { recursive: true });
    }

    if (!quiet) console.log('🚀 启动浏览器...');
    const browser = await puppeteer.launch({
      headless: 'new',
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // 设置视口大小
    await page.setViewport({ width, height });
    
    if (!quiet) console.log(`🌐 正在访问: ${url}`);
    await page.goto(url, { 
      waitUntil: 'domcontentloaded',
      timeout: timeout 
    });
    
    // 等待页面加载
    if (delay) {
      if (!quiet) console.log(`⏱️  等待 ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    // 生成文件名
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const domain = new URL(url).hostname.replace(/\./g, '_');
    const filename = `${domain}_${timestamp}.png`;
    const filepath = path.join(dateDir, filename);
    
    if (!quiet) console.log('📸 正在截图...');
    await page.screenshot({
      path: filepath,
      fullPage,
      type: 'png'
    });
    
    await browser.close();
    
    // 输出结果
    if (quiet) {
      console.log(`SUCCESS|${filepath}`);
    } else {
      console.log(`✅ 截图成功！`);
      console.log(`📁 保存路径: ${filepath}`);
    }
    
    return { success: true, filepath };
    
  } catch (error) {
    if (quiet) {
      console.log(`ERROR|${error.message}`);
    } else {
      console.error('❌ 截图失败:', error.message);
    }
    return { success: false, error: error.message };
  }
};

// 设置CLI程序
program
  .name('VCKit-web-screen')
  .description('VibeCoding Kit - Web Screenshot Tool')
  .version('1.0.0')
  .argument('<url>', '要截图的网页URL')
  .option('-o, --output <path>', '输出目录', path.join(os.homedir(), 'VCKit-Screenshots'))
  .option('-w, --width <number>', '视口宽度', '1920')
  .option('-h, --height <number>', '视口高度', '1080')
  .option('--no-full-page', '不截取整个页面，仅截取可视区域')
  .option('-d, --delay <number>', '页面加载等待时间(ms)', '1000')
  .option('-q, --quiet', '静默模式，只输出结果')
  .option('--timeout <number>', '页面加载超时时间(ms)', '10000')
  .action(async (url, options) => {
    // 验证URL格式
    try {
      new URL(url);
    } catch (error) {
      if (options.quiet) {
        console.log(`ERROR|无效的URL格式: ${url}`);
      } else {
        console.error('❌ 无效的URL格式:', url);
      }
      process.exit(1);
    }

    // 转换选项
    const screenshotOptions = {
      output: options.output,
      width: parseInt(options.width),
      height: parseInt(options.height),
      fullPage: options.fullPage,
      delay: parseInt(options.delay),
      quiet: options.quiet,
      timeout: parseInt(options.timeout)
    };

    const result = await takeScreenshot(url, screenshotOptions);
    
    // 根据结果设置退出代码
    if (!result.success) {
      process.exit(1);
    }
  });

// 解析命令行参数
program.parse();