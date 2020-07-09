import peerDepsExternal from "rollup-plugin-peer-deps-external";
module.exports = {
	input: "src/PaginationComponent.js",
	plugins: {
		babel: {
			presets: ["@babel/preset-env", "@babel/preset-react"],
			plugins: ["@babel/plugin-proposal-class-properties"]
		},
		"peer-deps-external": peerDepsExternal()
	},
	output: {
		moduleName: "react-reactstrap-pagination",
		fileName: "react-reactstrap-pagination[min].js",
		format: ["umd", "umd-min"]
	}
};
