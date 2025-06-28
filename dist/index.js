import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";
function grimpanFactory(type) {
    if (type === "ie") {
        return IEGrimpan.getInstance().initialize();
    }
    else if (type === "chorme") {
        return ChromeGrimpan.getInstance().initialize();
    }
    else if (type === "chorme") {
        return SatariGrimpan.getInstance().initialize();
    }
    else {
        throw new Error("일치하는 type이 없습니다.");
    }
}
function main() {
    grimpanFactory("ie");
    grimpanFactory("chrome");
    grimpanFactory("safari");
}
