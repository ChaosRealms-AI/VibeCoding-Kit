# 🎯 Page Element Extractor

A powerful browser-based tool for extracting complete component information from web pages. Perfect for developers who want to clone or recreate UI components with all their styling, colors, interactions, and responsive behavior.

## ✨ Features

### 🎨 **Complete Component Analysis**
- **HTML Structure**: Clean, isolated HTML markup
- **CSS Variables**: All custom properties from `:root`
- **Color Scheme**: Comprehensive color analysis with usage statistics
- **Layout Styles**: Key layout properties (flexbox, grid, positioning)
- **Child Element Styles**: Important styling for nested components
- **Responsive Classes**: Tailwind CSS breakpoint classes
- **Interaction States**: Hover, focus, active, and disabled states
- **Animations**: Transition and animation classes
- **Typography**: Font families and text styling

### 🧹 **Smart Filtering**
- Filters out default CSS values (`auto`, `normal`, `0px`, etc.)
- Removes redundant color values (`transparent`, `rgba(0,0,0,0)`)
- Focuses on meaningful styles that affect the component's appearance
- Provides intelligent color variable naming suggestions

### 📊 **Usage Analytics**
- Color usage frequency analysis
- Property type categorization (text, background, border)
- Element relationship mapping
- Style importance ranking

## 🚀 Quick Start

### Method 1: Browser Console (Recommended)

1. **Open the target webpage** in your browser
2. **Open Developer Tools** (F12 or right-click → Inspect)
3. **Navigate to the Console tab**
4. **Copy and paste** the entire content of `element-extract.js`
5. **Select your target element** in the Elements panel
6. **Run the extraction**:
   ```javascript
   extractCompleteComponentInfo($0)
   ```

### Method 2: Bookmarklet

1. Create a new bookmark in your browser
2. Set the URL to:
   ```javascript
   javascript:(function(){/* Paste the entire element-extract.js content here */})();
   ```
3. Click the bookmark on any page, then select an element and run:
   ```javascript
   extractCompleteComponentInfo($0)
   ```

### Method 3: Snippet

1. Open Developer Tools → Sources → Snippets
2. Create a new snippet and paste the `element-extract.js` content
3. Run the snippet, then use:
   ```javascript
   extractCompleteComponentInfo($0)
   ```

## 📋 Usage Examples

### Basic Component Extraction
```javascript
// Select any element on the page
// Then run:
extractCompleteComponentInfo($0)
```

### Extract Multiple Components
```javascript
// Extract a navigation bar
const nav = document.querySelector('nav');
extractCompleteComponentInfo(nav);

// Extract a card component
const card = document.querySelector('.card');
extractCompleteComponentInfo(card);
```

## 📊 Output Format

The tool generates a comprehensive markdown report with the following sections:

### 1. **HTML Structure**
```html
<div class="component">
  <!-- Clean, isolated HTML markup -->
</div>
```

### 2. **CSS Variables**
```css
:root {
  --primary-color: #3b82f6;
  --text-color: #1f2937;
  --border-radius: 8px;
}
```

### 3. **Color Scheme Analysis**
```css
/* Color usage statistics */
#3b82f6; /* background-color, border-color - 使用5次 */
#1f2937; /* color - 使用3次 */
```

### 4. **Layout Styles**
```css
.main-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
}
```

### 5. **Responsive Classes**
```css
/* Tailwind responsive classes */
lg:flex
md:hidden
xl:text-lg
```

### 6. **Interaction States**
```css
/* Hover and focus states */
hover:bg-gray-100
focus:ring-2
active:scale-95
```

## 🎯 Use Cases

### 🎨 **UI Component Cloning**
- Extract design systems from popular websites
- Clone components for your own projects
- Understand modern UI patterns

### 🔍 **Design Analysis**
- Analyze color schemes and typography
- Study responsive design patterns
- Understand interaction patterns

### 📚 **Learning & Research**
- Study how professional components are built
- Learn modern CSS techniques
- Understand design system implementation

### 🛠️ **Development Workflow**
- Quick component prototyping
- Design system documentation
- Code review and analysis

## 🔧 Advanced Usage

### Custom Filtering
You can modify the tool to focus on specific aspects:

```javascript
// Extract only color information
const result = extractCompleteComponentInfo($0);
console.log('Color scheme:', result.data.colorScheme);

// Extract only layout styles
console.log('Layout styles:', result.data.layoutStyles);
```

### Batch Processing
```javascript
// Extract multiple similar components
const buttons = document.querySelectorAll('button');
buttons.forEach((btn, index) => {
  console.log(`Button ${index + 1}:`);
  extractCompleteComponentInfo(btn);
});
```

## 🎨 Color Analysis Features

The tool provides intelligent color analysis:

- **Usage Frequency**: Shows how often each color is used
- **Property Mapping**: Maps colors to their CSS properties
- **Element Context**: Shows which elements use each color
- **Variable Suggestions**: Recommends semantic variable names

### Example Color Analysis:
```css
/* Generated color variables */
:root {
  --text-primary: #1f2937;    /* Most used text color */
  --bg-surface: #ffffff;      /* Main background */
  --border-default: #e5e7eb;  /* Default border */
  --accent-primary: #3b82f6;  /* Primary accent */
}
```

## 📱 Responsive Design Support

The tool automatically detects and extracts:

- **Tailwind CSS breakpoints**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- **Custom responsive classes**: Any class matching breakpoint patterns
- **Display logic**: Show/hide patterns across screen sizes

## ⚡ Interaction State Detection

Automatically identifies:

- **Hover states**: `hover:bg-gray-100`
- **Focus states**: `focus:ring-2`
- **Active states**: `active:scale-95`
- **Disabled states**: `disabled:opacity-50`
- **Group interactions**: `group-hover:bg-blue-500`

## 🎭 Animation & Transition Support

Detects and extracts:

- **CSS transitions**: `transition-colors`, `transition-all`
- **Animation classes**: `animate-pulse`, `animate-spin`
- **Transform effects**: `transform`, `scale`, `rotate`

## 🔤 Typography Analysis

Provides comprehensive font information:

- **Font families**: All used font stacks
- **Font weights**: Bold, normal, light variations
- **Text styling**: Size, line-height, letter-spacing

## 🛠️ Customization

### Modify Filtering Rules
```javascript
// Add custom default values to filter out
const customDefaults = new Set(['my-custom-default', 'another-default']);

// Modify the layout properties to extract
const customLayoutProps = ['display', 'position', 'my-custom-prop'];
```

### Add Custom Analysis
```javascript
// Extract custom data
const customData = {
  accessibility: extractAccessibilityInfo(element),
  performance: extractPerformanceMetrics(element)
};
```

## 🐛 Troubleshooting

### Common Issues

**"请先在Elements面板中选中目标元素"**
- Make sure you've selected an element in the Elements panel
- Use `$0` to reference the currently selected element

**Empty or incomplete results**
- The element might not have computed styles
- Try selecting a parent element with more styling
- Check if the page uses dynamic styling

**Missing responsive classes**
- Ensure the page uses Tailwind CSS or similar utility classes
- Check if responsive classes are applied via JavaScript

### Debug Mode
```javascript
// Enable verbose logging
const DEBUG = true;
extractCompleteComponentInfo($0);
```

## 🤝 Contributing

Feel free to contribute improvements:

1. **Feature Requests**: Add new extraction capabilities
2. **Bug Reports**: Report issues with specific components
3. **Enhancements**: Improve filtering and analysis algorithms
4. **Documentation**: Add more examples and use cases

## 📄 License

This tool is part of the VibeCoding-Kit and is available for personal and commercial use.

## 🙏 Acknowledgments

- Inspired by modern design system analysis tools
- Built for the developer community
- Special thanks to all contributors and users

---

**Happy Component Extraction! 🎉**

For more tools and resources, check out the [VibeCoding-Kit](https://github.com/your-username/VibeCoding-Kit) collection. 