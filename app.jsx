// App entry — composes the homepage in original section order

const App = () => (
  <div data-screen-label="Pandapak Homepage">
    <TopBar/>
    <Header/>
    <Hero/>
    <TrustStrip/>
    <TabbedProducts tabs={[bestSellers, sales, newProducts]} defaultTab={0}/>
    <TabbedProducts tabs={[paperBowlsCat, soupContainersCat, foodContainersCat, tablewareCat]} defaultTab={0}/>
    <BrandedStrip/>
    <Categories/>
    <InfoCards/>
    <FAQ/>
    <ProofBar/>
    <Footer/>
    <StrategyPanel/>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
