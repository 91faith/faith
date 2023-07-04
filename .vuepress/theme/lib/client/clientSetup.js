import { computed, provide } from 'vue';
import { usePageFrontmatter } from '@vuepress/client';
import { resolveSeriesItems, seriesItemsSymbol, resolveCatalog, catalogSymbol, useThemeLocaleData, } from './composables';
import { usePageData } from '@vuepress-reco/vuepress-plugin-page/lib/client/composable';
export function applyClientSetup() {
    // we need to access series items in multiple components
    // so we make it global computed
    const themeLocal = useThemeLocaleData();
    const { series } = usePageData();
    const frontmatter = usePageFrontmatter();
    const seriesItems = computed(() => resolveSeriesItems(frontmatter.value, themeLocal.value, series));
    provide(seriesItemsSymbol, seriesItems);
    const catalog = computed(() => resolveCatalog());
    provide(catalogSymbol, catalog);
}
