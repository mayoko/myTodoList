// プロジェクトの情報をまとめるクラス
class ProjectInfo {
    constructor(id, parent_id, title, text) {
        this.id = id;
        this.parent_id = parent_id;
        this.title = title;
        this.text = text;
    }
};

class ProjectInfoManager {
    constructor() {
        this.projects = new Map();
        this.children = new Map();
        // プロジェクトの情報をどこかから取ってくる
        this.getProjectInfo();
        // 色々と初期化
        this.initialize();
    }

    // 全てのプロジェクト情報を頂いていく！
    getAll() {
        return [...this.projects.values()];
    }

    // id からプロジェクト情報を取得
    get(id) {
        return this.projects.get(id);
    }

    // id からその子供を取得
    getChildren(id) {
        return this.children.get(id);
    }

    // プロジェクトの情報を取ってくる
    // データベースとか使うことになるのかなぁ
    // 今回は適当に追加していく
    getProjectInfo() {
        this.projects.set("0", new ProjectInfo("0", "-1", "root", "root"));
        this.projects.set("1", new ProjectInfo("1", "0", "1", "1"));
        this.projects.set("2", new ProjectInfo("2", "0", "2", "2"));
        this.projects.set("3", new ProjectInfo("3", "1", "3", "3"));
        this.projects.set("4", new ProjectInfo("4", "1", "4", "4"));
    }

    // 色々と初期化
    initialize() {
        // children を生成する
        const values = this.projects.values();
        for (const value of values) {
            const parent_id = value.parent_id;
            if (!this.children.has(parent_id)) {
                this.children.set(parent_id, []);
            }
            this.children.get(parent_id).push(value.id);
        }
    }
};

const projectInfoManager = new ProjectInfoManager();
Object.freeze(projectInfoManager);

export {
    ProjectInfo,
    projectInfoManager
};