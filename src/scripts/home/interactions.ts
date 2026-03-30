// 首页交互逻辑

// 获取元素
const getElements = () => ({
  homeLayer: document.getElementById('home-layer'),
  depthLayer: document.getElementById('depth-layer'),
  depthItems: document.querySelectorAll('.depth-item'),
  depthCounter: document.getElementById('depth-counter'),
  depthContainer: document.querySelector('.depth-container'),
  menuNavItem: document.querySelector('.radial-item[data-id="menu"]'),
});

// 状态管理
interface AppState {
  isInDepthMode: boolean;
  isMenuOpen: boolean;
  scrollThreshold: number;
  accumulatedScroll: number;
}

const state: AppState = {
  isInDepthMode: false,
  isMenuOpen: false,
  scrollThreshold: 50,
  accumulatedScroll: 0,
};

// 进入深度模式
const enterDepthMode = () => {
  const { homeLayer, depthLayer, depthContainer } = getElements();
  state.isInDepthMode = true;
  homeLayer?.classList.add('hidden');
  depthLayer?.classList.add('active');
  
  // 关闭菜单
  if (typeof window !== 'undefined' && (window as any).closeRadialMenu) {
    (window as any).closeRadialMenu();
  }
  
  setTimeout(() => {
    updateDepthItems();
  }, 300);
};

// 返回首页模式
const exitDepthMode = () => {
  const { homeLayer, depthLayer, depthContainer } = getElements();
  state.isInDepthMode = false;
  homeLayer?.classList.remove('hidden');
  depthLayer?.classList.remove('active');
  document.body.style.overflow = '';
  
  if (depthContainer) {
    (depthContainer as HTMLElement).scrollTop = 0;
  }
};

// 更新深度项目的可见性
const updateDepthItems = () => {
  const { depthContainer, depthCounter, depthItems } = getElements();
  if (!depthContainer) return;
  
  const scrollTop = (depthContainer as HTMLElement).scrollTop;
  const viewportHeight = window.innerHeight;
  
  const depth = Math.floor(scrollTop / 100);
  if (depthCounter) {
    depthCounter.textContent = depth.toString();
  }
  
  depthItems.forEach((item) => {
    const itemTop = (item as HTMLElement).offsetTop;
    const triggerPoint = scrollTop + viewportHeight * 0.6;
    
    if (triggerPoint > itemTop) {
      item.classList.add('visible');
      const distance = triggerPoint - itemTop;
      const progress = Math.min(distance / (viewportHeight * 0.5), 1);
      (item as HTMLElement).style.opacity = String(0.3 + progress * 0.7);
      (item as HTMLElement).style.transform = `scale(${0.8 + progress * 0.2})`;
    } else {
      item.classList.remove('visible');
      (item as HTMLElement).style.opacity = '0';
      (item as HTMLElement).style.transform = 'scale(0.8)';
    }
  });
};

// 初始化事件监听
export const initHomeInteractions = () => {
  const { 
    menuNavItem,
    depthContainer 
  } = getElements();

  // 点击圆盘菜单中的 MENU - 进入深度模式
  menuNavItem?.addEventListener('click', (e) => {
    e.preventDefault();
    enterDepthMode();
  });

  // 滚轮事件处理
  window.addEventListener('wheel', (e) => {
    if (!state.isInDepthMode && !state.isMenuOpen) {
      if (e.deltaY > 0) {
        state.accumulatedScroll += e.deltaY;
        if (state.accumulatedScroll > state.scrollThreshold) {
          e.preventDefault();
          enterDepthMode();
          state.accumulatedScroll = 0;
        }
      } else {
        state.accumulatedScroll = Math.max(0, state.accumulatedScroll + e.deltaY);
      }
    }
  }, { passive: false });

  // 深度容器内的滚动事件
  depthContainer?.addEventListener('scroll', () => {
    updateDepthItems();
  });

  // 键盘导航
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.isInDepthMode) {
        exitDepthMode();
      }
    }
  });
  
  // 监听菜单状态变化
  const radialMenu = document.getElementById('radial-menu');
  if (radialMenu) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          state.isMenuOpen = radialMenu.classList.contains('active');
        }
      });
    });
    observer.observe(radialMenu, { attributes: true });
  }
};
