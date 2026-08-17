const { forecastDemand } = require("./demand");
const { decideInbound } = require("./inventory");
const { shipProducts } = require("./shipping");

const demandHistory = [100, 120, 110, 130, 140];

let currentInventory = 50;
const warehouseCapacity = 150;
const actualDemand = 120;
const price = 1000;

// 1. 需要予測
const forecast = forecastDemand(demandHistory);

// 2. 入庫量決定
const inbound = decideInbound(
  forecast,
  currentInventory,
  warehouseCapacity
);

// 3. 入庫反映
currentInventory += inbound;

// 4. 出庫
const shippingResult = shipProducts(
  actualDemand,
  currentInventory
);

// 5. 売上計算
const revenue =
  shippingResult.shippedQuantity * price;

// 結果表示
console.log("=== 物流シミュレーション結果 ===");
console.log(`需要予測: ${forecast}`);
console.log(`入庫量: ${inbound}`);
console.log(`入庫後在庫: ${currentInventory}`);
console.log(`実際の需要: ${actualDemand}`);
console.log(`出庫量: ${shippingResult.shippedQuantity}`);
console.log(`残り在庫: ${shippingResult.remainingInventory}`);
console.log(`販売機会損失: ${shippingResult.lostSales}`);
console.log(`売上: ${revenue}円`);