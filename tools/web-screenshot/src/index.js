#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function takeScreenshot(url, options = {}) {
  const {
    output = './screenshots',
    width = 1920,
    height = 1080,
    fullPage = true,
    delay = 1000
  } = options;

  try {
    // 创建输出目录
    const outputDir = path.resolve(output);
    const dateDir = path.join(outputDir, new Date().toISOString().split('T')[0]);
    
    if (!fs.existsSync(dateDir)) {
      fs.mkdirSync(dateDir, { recursive: true });
    }

    console.log('启动浏览器...');
    const browser = await puppeteer.launch({
      headless: 'new',
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox'
      ]
    });

    const page = await browser.newPage();
    
    // 设置视口大小
    await page.setViewport({ width, height });
    
    console.log(`正在访问: ${url}`);
    await page.goto(url, { 
      waitUntil: 'domcontentloaded',
      timeout: 10000 
    });
    
    // 等待页面加载
    if (delay) {
      console.log(`等待 ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    // 生成文件名
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const domain = new URL(url).hostname.replace(/\./g, '_');
    const filename = `${domain}_${timestamp}.png`;
    const filepath = path.join(dateDir, filename);
    
    console.log('正在截图...');
    await page.screenshot({
      path: filepath,
      fullPage,
      type: 'png'
    });
    
    await browser.close();
    
    console.log(`✅ 截图已保存: ${filepath}`);
    return filepath;
    
  } catch (error) {
    console.error('❌ 截图失败:', error.message);
    process.exit(1);
  }
}

// 命令行参数处理
const args = process.argv.slice(2);
const url = args[0];

if (!url) {
  console.log('用法: node index.js <URL>');
  console.log('示例: node index.js https://www.baidu.com');
  process.exit(1);
}

// 验证URL格式
try {
  new URL(url);
} catch (error) {
  console.error('❌ 无效的URL格式:', url);
  process.exit(1);
}

// 执行截图
takeScreenshot(url);