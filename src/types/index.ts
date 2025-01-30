export type HederaNetworkType = "mainnet" | "testnet" | "previewnet";

export type TokenBalance = {
    account: string;
    balance: number;
    decimals: number;
};

export type TokenHoldersBalancesApiResponse = {
    timestamp: string;
    balances: TokenBalance[];
    links: {
        next: string; // link to the next page
    };
};

export type DetailedTokenBalance= {
    tokenId: string;
    tokenSymbol: string;
    tokenName: string;
    tokenDecimals: string;
    balance: number;
    balanceInDisplayUnit: number;
}

export type HtsTokenBalanceApiReponse = {
    timestamp: string;
    balances: TokenBalance[];
    links: {
        next: string;
    };
};

type ProtobufEncodedKey = {
    _type: "ProtobufEncoded";
    key: string;
};

type CustomFees = {
    created_timestamp: string;
    fixed_fees: any[];
    fractional_fees: any[];
};

export type HtsTokenDetails = {
    admin_key: ProtobufEncodedKey;
    auto_renew_account: string;
    auto_renew_period: number;
    created_timestamp: string;
    custom_fees: CustomFees;
    decimals: string;
    deleted: boolean;
    expiry_timestamp: number;
    fee_schedule_key: ProtobufEncodedKey;
    freeze_default: boolean;
    freeze_key: ProtobufEncodedKey;
    initial_supply: string;
    kyc_key: ProtobufEncodedKey;
    max_supply: string;
    memo: string;
    metadata: string;
    metadata_key: ProtobufEncodedKey | null;
    modified_timestamp: string;
    name: string;
    pause_key: ProtobufEncodedKey;
    pause_status: "PAUSED" | "UNPAUSED";
    supply_key: ProtobufEncodedKey;
    supply_type: "FINITE" | "INFINITE";
    symbol: string;
    token_id: string;
    total_supply: string;
    treasury_account_id: string;
    type: "FUNGIBLE_COMMON" | "NON_FUNGIBLE_UNIQUE";
    wipe_key: ProtobufEncodedKey;
};

export type AllTokensBalancesApiResponse = {
    timestamp: string;
    balances: {
        account: string; // Account ID in the format "0.0.x"
        balance: number; // Total balance equivalent in HBAR
        tokens: {
            token_id: string; // Token ID in the format "0.0.x"
            balance: number; // Balance of the specific token
        }[];
    }[];
    links: {
        next: string | null; // link to next page
    };
}

export type RejectTokenResult = {
    status: string,
    txHash: string,
}

export type AssociateTokenResult = {
    status: string,
    txHash: string,
}

export type Airdrop = {
    amount: number;
    receiver_id: string;
    sender_id: string;
    token_id: string;
}

export type PendingAirdropsApiResponse = {
    airdrops: Airdrop[];
    links: {
        next: string | null;
    };
}
