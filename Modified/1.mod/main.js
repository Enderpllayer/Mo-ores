const Main = new NativeClass("Terraria", "Main");
const WorldGen = new NativeClass("Terraria", "WorldGen");
const UnifiedRandom = new NativeClass("Terraria.Utilities", "UnifiedRandom");
const Next = UnifiedRandom['int Next(int minValue, int maxValue)'];
const GenVars = new NativeClass("Terraria.WorldBuilding", "GenVars");

const OreTileID = [6, 7, 8, 9, 22, 37, 166, 167, 168, 169, 204];

WorldGen.ShimmerCleanUp.hook((original) => {
    original();

    for (let k = 0; k < Main.maxTilesX * Main.maxTilesY * 3E-04; k++) {
        let x = Next(WorldGen.genRand, 0, Main.maxTilesX);
        let y = Next(WorldGen.genRand, GenVars.rockLayer, Main.maxTilesY);
        let RandomOre = Math.floor(Math.random() * OreTileID.length);
        const SelectedOre = OreTileID[RandomOre];
        WorldGen.OreRunner(x, y, Next(WorldGen.genRand, 10, 16), 9, SelectedOre);
    }
});
