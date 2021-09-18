module.exports = {
    MOONRIVER_CONFIG: {
        //TOKEN
        WETH: "0x98878B06940aE243284CA214f92Bb71a2b032B8A",
        CHI: "0x0000000000000000000000000000000000000000",
        DODO: "",

        //Helper
        //MultiCall: "0xA922EeEB7909E4a06DCb4b2bff0335Cd027cCfbF",
        //DODOSwapCalcHelper: "0xA45b1105d21dFd3915EaDF1b5523196B458C7614",
        //DODOZoo: "0x02fCB21dc1cf221939C1d4277fB54016b5d32bC7",//not verify
        //DODO: "0xB5397B2210f49e96a5EB2c9747Aa2bD9397d90C0",//not verify
        //ERC20Helper: "0x6373ceB657C83C91088d328622573FB766064Ac4", //not verify
        DODOSellHelper: "0x5e84190a270333aCe5B9202a3F4ceBf11b81bB01", //not verify
        DODOCalleeHelper: "0x6B208E08dcF6BD51F50C5Da09d15B2D8E5C46Cf2", //not verify
        DODOV1PmmHelper: "0x3CD6D7F5fF977bf8069548eA1F9441b061162b42", //not verify
        DODOV2RouteHelper: "0x6B4Fa0bc61Eddc928e0Df9c7f01e407BfcD3e5EF",
        CurveSample: "",

        //Template
        CloneFactory: "0xDfaf9584F5d229A9DBE5978523317820A8897C5A", //not verify
        FeeRateModel: "0x2BBD66fC4898242BDBD2583BBe1d76E8b8f71445",
        PermissionManager: "0x729f7f44bf64Ce814716b6261e267DbE6cdf021c", //not verify
        DVM: "0xC3BeD579CaB3EC29B22D9AB99F4E586af42496b9",//not verify
        DPP: "0x989DcAA95801C527C5B73AA65d3962dF9aCe1b0C",//not verify
        DSP: "0x550B2e7bD9605b8dcdd20d01bA73f1feB6ce289b",
        DPPAdmin: "0x041ABa00c57Dd47abC37A2931dF569a2A2cc57Be",//not verify
        CP: "0x72d220cE168C4f361dD4deE5D826a01AD8598f6C",
        ERC20MineV3: "0xf50BDc9E90B7a1c138cb7935071b85c417C4cb8e",//not verify

        ERC20: "0x80930Cb1849F7D42531506fF45E66724338A821b",//not verify
        CustomERC20: "0xB5Dc5E183c2aCf02aB879A8569aB4EDAf147d537",//not verify


        //not verify
        //Factory
        DVMFactory: "0x738Ebf387A0CE0eb46b0eF8Fa5DEa2EaE6B1Df51",
        DPPFactory: "0xb57Dd5c265dBb13CA014F2332069E90CD0e22e65",
        DSPFactory: "0xB76de21f04F677f07D9881174a1D8E624276314C",
        UpCpFactory: "0x043957f7554275b90c5178872faE851dcfC1089D",
        CrowdPoolingFactory: "0x0596908263Ef2724fBfBcAfA1c983FCD7a629038",
        ERC20V2Factory: "0xaeB5CF31b97dce6134e416129845e01106fFB177",
        DODOMineV3Registry: "0x5515363c0412AdD5c72d3E302fE1bD7dCBCF93Fe",

        //not verify
        //Approve
        DODOApprove: "0xE8C9A78725D0451FA19878D5f8A3dC0D55FECF25",
        DODOApproveProxy: "0x7737fd30535c69545deeEa54AB8Dd590ccaEBD3c",


        //not verify
        //Adapter
        DODOV1Adapter: "0x40672211D4310ad71daDc8cDE7Aa3Fb90d420855",
        DODOV2Adapter: "0xbe9a66e49503e84ae59a4d0545365AABedf33b40",
        UniAdapter: "0xa356867fDCEa8e71AEaF87805808803806231FdC",
        CurveAdapter: "",


        //not verify
        //Proxy
        DODOV2Proxy: "0xa2CB66EBB947D217f61510882096F6e95c1DE97D",
        DSPProxy: "0x5480B32c03647ff5E5A653F0465E798DBe558B57",
        CpProxy: "0x45894C062E6f4E58B257e0826675355305dfef0d",
        RouteProxy: "0x958f79e2998DFe417208b9A07D799265B0298e58",
        DODOMineV3Proxy: "0xb159260989012fA98af560A3Fa6D9cd11a64cf6E",

        //Account
        multiSigAddress: "0xef49a6DBa1C8DF859E49c17E9A485B439c7689d3",
        defaultMaintainer: "0xef49a6DBa1C8DF859E49c17E9A485B439c7689d3",


        //================== NFT ====================
        BuyoutModel: "",
        Fragment: "",
        NFTCollateralVault: "",
        DODONFTRouteHelper: "",

        InitializableERC721: "",
        InitializableERC1155: "",
        NFTTokenFactory: "",

        DodoNftErc721: "",
        DodoNftErc1155: "",

        DODONFTRegistry: "",
        DODONFTProxy: "",

        //================= DropsV1 =================
        MysteryBoxV1: "",
        RandomGenerator: "",
        RandomPool: [
            "",
        ],

        //================= DropsV2 ==================
        DropsFeeModel: "",
        DropsProxy: ""
    }
}