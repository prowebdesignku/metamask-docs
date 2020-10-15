(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{394:function(e,t,a){"use strict";a.r(t);var r=a(11),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"common-terms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-terms"}},[e._v("#")]),e._v(" Common Terms")]),e._v(" "),a("h2",{attrs:{id:"words-are-hard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#words-are-hard"}},[e._v("#")]),e._v(" Words are Hard")]),e._v(" "),a("p",{attrs:{id:"agoctitecs_p"}},[e._v("\n  This is a list of terms you might encounter when using the MetaMask interface.\n")]),e._v(" "),a("h4",{attrs:{id:"you-can-also-read-in-spanish-thanks-to-faraggi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#you-can-also-read-in-spanish-thanks-to-faraggi"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/faraggi/words-are-hard-es/blob/master/words-are-hard-es.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("You can also read in Spanish"),a("OutboundLink")],1),e._v(", thanks to "),a("a",{attrs:{href:"https://github.com/faraggi",target:"_blank",rel:"noopener noreferrer"}},[e._v("faraggi"),a("OutboundLink")],1)]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet"}},[e._v("#")]),e._v(" Wallet")]),e._v(" "),a("ul",[a("li",{attrs:{id:"wallet_l1"}},[e._v("The interface / client / wrapper / holder that you use to manage your account(s).")]),e._v(" "),a("li",{attrs:{id:"wallet_l2"}},[e._v("Example: MetaMask.io, your Ledger Hardware Wallet, a Multisig Wallet Contract.")])]),e._v(" "),a("h3",{attrs:{id:"account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[e._v("#")]),e._v(" Account")]),e._v(" "),a("ul",[a("li",{attrs:{id:"account_l1"}},[e._v('A public & private keypair that "holds" your funds.')]),e._v(" "),a("li",{attrs:{id:"account_l2"}},[e._v("Your funds are actually stored on the blockchain, not in the wallet or account.")]),e._v(" "),a("li",{attrs:{id:"account_l3"}},[e._v(" Just like your Reddit account has a "),a("code",[e._v(" username (public)")]),e._v(" and "),a("code",[e._v(" password (private)")]),e._v(", so does your Ethereum account. For additional security, you can use a password to encrypt your private key which would result in a "),a("code",[e._v(" username (public)")]),e._v(" and "),a("code",[e._v(" password (private)")]),e._v(" and "),a("code",[e._v(" password for that password (private + more secure)")]),e._v(". See the "),a("code",[e._v(" Keystore File")]),e._v(" section. ")])]),e._v(" "),a("h3",{attrs:{id:"address-public-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-public-key"}},[e._v("#")]),e._v(" Address "),a("em",[e._v('("Public Key")')])]),e._v(" "),a("ul",[a("li",{attrs:{id:"address_l1"}},[e._v("You use this to send funds "),a("b",[e._v("to")]),e._v(" an account.")]),e._v(" "),a("li",{attrs:{id:"address_l2"}},[e._v('Sometimes referred to as the "public key"')]),e._v(" "),a("li",{attrs:{id:"address_l3"}},[e._v("A string made up of "),a("code",[e._v("0x")]),e._v(" + "),a("code",[e._v("40 hexadecimal characters")]),e._v(".")]),e._v(" "),a("li",{attrs:{id:"address_l4"}},[e._v("In Ethereum, the address begins with "),a("code",[e._v("0x")]),e._v(".")]),e._v(" "),a("li",{attrs:{id:"address_l5"}},[e._v("Example: "),a("code",[e._v("0x06A85356DCb5b307096726FB86A78c59D38e08ee")])])]),e._v(" "),a("h3",{attrs:{id:"public-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-key"}},[e._v("#")]),e._v(" Public Key")]),e._v(" "),a("ul",[a("li",{attrs:{id:"pubk_l1"}},[e._v("In cryptography, you have a keypair: the public and private key.")]),e._v(" "),a("li",{attrs:{id:"pubk_l2"}},[e._v("You can derive a public key from a private key, but cannot derive a private key from a public key.")]),e._v(" "),a("li",{attrs:{id:"pubk_l3"}},[e._v('(Advanced) In Ethereum, the address "acts" like the public key, but it\'s not actually the public key.')]),e._v(" "),a("li",{attrs:{id:"pubk_l4"}},[e._v("(Advanced) In Ethereum, the public key is derived from the private key and is 128 hex characters. You then take the "),a("code",[e._v('"SHA3" (Keccak-256)')]),e._v(" hash of this (64 characters), take the last 40 characters, and prefix with "),a("code",[e._v("0x")]),e._v(", give you your 42-character address.")])]),e._v(" "),a("h3",{attrs:{id:"private-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-key"}},[e._v("#")]),e._v(" Private Key")]),e._v(" "),a("ul",[a("li",{attrs:{id:"privk_1"}},[e._v("You use this to send funds "),a("b",[e._v("from")]),e._v(" an account.")]),e._v(" "),a("li",{attrs:{id:"privk_2"}},[e._v("The secret half of your Address / public key.")]),e._v(" "),a("li",{attrs:{id:"privk_3"}},[e._v("A string of 64 hexadecimal characters.")]),e._v(" "),a("li",{attrs:{id:"privk_4"}},[e._v("("),a("a",{attrs:{href:"https://crypto.stackexchange.com/questions/30269/are-all-possible-ec-private-keys-valid",target:"_blank"}},[e._v("Almost")]),e._v(") every string of 64 hexadecimal characters is a private key.")]),e._v(" "),a("li",{attrs:{id:"privk_5"}},[e._v("If you hand-type a private key differently today than yesterday, you will access a different wallet. Never hand type your private key.")]),e._v(" "),a("li",{attrs:{id:"privk_6"}},[e._v("This is the string you need to send from your account. Without it you cannot access your funds. Although, you don't need to save this raw, unencrypted private key in this format. You can saving the fancy versions of it (e.g. the Keystore File / Mnemonic Phrase).")]),e._v(" "),a("li",{attrs:{id:"privk_7"}},[e._v("Example: "),a("code",[e._v("afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890")])])]),e._v(" "),a("h3",{attrs:{id:"keystore-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keystore-file"}},[e._v("#")]),e._v(" Keystore File")]),e._v(" "),a("ul",[a("li",{attrs:{id:"keystoref_l1"}},[e._v("\n    Encrypted version of your private key in JSON format (though it does not have a JSON extension)\n  ")]),e._v(" "),a("li",{attrs:{id:"keystoref_l2"}},[e._v("\n    A fancy version of your private key that is protected by a password of your choosing.\n  ")]),e._v(" "),a("li",{attrs:{id:"keystoref_l3"}},[e._v("\n    When combined with the password, it has the private key.\n  ")]),e._v(" "),a("li",{attrs:{id:"keystoref_l4"}},[e._v("\n    Safer than a private key because you need the password.\n  ")]),e._v(" "),a("li",{attrs:{id:"keystoref_l5"}},[e._v("\n    File name usually is in the format "),a("code",[e._v("UTC")]),e._v(" + "),a("code",[e._v("--")]),e._v(" + "),a("code",[e._v("DATE_CREATED")]),e._v(" + "),a("code",[e._v("--")]),e._v(" + "),a("code",[e._v("YOUR_ADDRESS_WITHOUT_THE_OX")])]),e._v(" "),a("li",{attrs:{id:"keystoref_l6"}},[e._v("\n    Example of File Name: "),a("code",[e._v("UTC--2017-07-02T20-33-09.177Z--06a85356dcb5b307096726fb86a78c59d38e08ee")])]),e._v(" "),a("li",{attrs:{id:"keystoref_l7"}},[e._v("\n    Example of Contents: "),a("code",[e._v('{"version":3,"id":"aa811d53-fe9a-44a2-bd1c-e737007b5591","address":"06a85356dcb5b307096726fb86a78c59d38e08ee","Crypto":{"ciphertext":"f5a7cc8d4b8cf93510b0d0d057f3a52ac79fd48e619e0638c4ffd978ca180248","cipherparams":{"iv":"975ab00192e2dd74170e91ca59c0b0bd"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"0210f0d0b99e440dfbceb36373304638bac093a367ee7da6411cd165f7aa907a","n":1024,"r":8,"p":1},"mac":"8197a747a3855a10546a2ff939c36470daed78e393b670efa0c12fe3b23dd7e3"}}')])]),e._v(" "),a("li",{attrs:{id:"keystoref_l8"}},[e._v("\n    (pw: "),a("code",[e._v("mypassword")]),e._v(")\n  ")])]),e._v(" "),a("h3",{attrs:{id:"mnemonic-phrase-seed-phrase-seed-words"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mnemonic-phrase-seed-phrase-seed-words"}},[e._v("#")]),e._v(" Mnemonic Phrase / Seed Phrase / Seed Words")]),e._v(" "),a("ul",[a("li",{attrs:{id:"mphrase_l1"}},[e._v("\n    Another fancy version of your private key, that is actually used to derive multiple private keys.\n  ")]),e._v(" "),a("li",{attrs:{id:"mphrase_l2"}},[e._v("\n    A (typically) 12 or 24 word phrase that allows you to access infinite number of accounts.\n  ")]),e._v(" "),a("li",{attrs:{id:"mphrase_l3"}},[e._v("\n    Used by Ledger, TREZOR, MetaMask, Jaxx, and others.\n  ")]),e._v(" "),a("li",{attrs:{id:"mphrase_l4"}},[e._v("\n    Originates from "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank"}},[e._v("BIP 39 Spec")]),e._v(".\n  ")]),e._v(" "),a("li",{attrs:{id:"mphrase_l5"}},[e._v('\n    The accounts you can access with this phrase are determined by the "path".\n  ')]),e._v(" "),a("li",{attrs:{id:"mphrase_l6"}},[e._v("\n    Example 12-words: "),a("code",[e._v("brain surround have swap horror body response double fire dumb bring hazard")])]),e._v(" "),a("li",{attrs:{id:"mphrase_l7"}},[e._v("\n    Example 24-words: "),a("code",[e._v("card enrich gesture connect kick topple fan body blind engine lemon swarm venue praise addict agent unaware equal bean sing govern income link leg")])])]),e._v(" "),a("h3",{attrs:{id:"hardware-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wallet"}},[e._v("#")]),e._v(" Hardware Wallet")]),e._v(" "),a("ul",[a("li",{attrs:{id:"hardwarew_l1"}},[e._v('\n    Typically, a single-purpose device that "holds" your private key(s), ensuring your private keys are safe.\n  ')]),e._v(" "),a("li",{attrs:{id:"hardwarew_l2"}},[e._v("\n    Typically, they use a 24-word phrase. This phrase you should write down (not on your computer) and store separately from your hardware wallet.\n  ")]),e._v(" "),a("li",{attrs:{id:"hardwarew_l3"}},[e._v("\n    If you lose your hardware wallet, you can still gain access to your accounts & funds via the word-phrase you wrote down.\n  ")]),e._v(" "),a("li",{attrs:{id:"hardwarew_l4"}},[e._v("\n    Never type the word-phrase on your computer. It defeats the purpose of your hardware wallet.\n  ")]),e._v(" "),a("li",{attrs:{id:"hardwarew_l5"}},[a("a",{attrs:{href:"https://kb.myetherwallet.com/en/hardware-wallets/",target:"_blank"}},[e._v(" See here for more information about Hardware Wallets")])])]),e._v(" "),a("h3",{attrs:{id:"identicon-addressidenticon-addressicon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identicon-addressidenticon-addressicon"}},[e._v("#")]),e._v(" Identicon / AddressIdenticon / AddressIcon")]),e._v(" "),a("ul",[a("li",{attrs:{id:"addressIdent_l1"}},[e._v("\n    The colorful blob of colors that corresponds to your address.\n  ")]),e._v(" "),a("li",{attrs:{id:"addressIdent_l2"}},[e._v("\n    It is an easy way to see if your address is correct.\n  ")]),e._v(" "),a("li",{attrs:{id:"addressIdent_l3"}},[a("a",{attrs:{href:"http://i.imgur.com/lHUrIiZ.jpg",target:"_blank"}},[e._v(" Example 1 ")])]),e._v(" "),a("li",{attrs:{id:"addressIdent_l4"}},[a("a",{attrs:{href:"http://i.imgur.com/FvyLewS.jpg",target:"_blank"}},[e._v(" Example 2 ")])]),e._v(" "),a("li",{attrs:{id:"addressIdent_l5"}},[a("em",[e._v("Note: the above addresses are a single character different but have remarkably different icons & colors. Magic!")])])]),e._v(" "),a("h3",{attrs:{id:"hexadecimal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexadecimal"}},[e._v("#")]),e._v(" Hexadecimal")]),e._v(" "),a("ul",[a("li",{attrs:{id:"hexadecimal_l"}},[e._v("\n    Used all over Ethereum for a variety of things, a hexadecimal string is comprised of the numbers "),a("code",[e._v("0 1 2 3 4 5 6 7 8 9")]),e._v(" and "),a("code",[e._v("A B C D E F")])])]),e._v(" "),a("h3",{attrs:{id:"seed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seed"}},[e._v("#")]),e._v(" Seed")]),e._v(" "),a("ul",[a("li",{attrs:{id:"seed_l1"}},[e._v("\n    The input given to derive a private key. This should always be generated in a truly random way, not something you make up with your measly human brain.\n  ")]),e._v(" "),a("li",{attrs:{id:"seed_l2"}},[e._v("\n    If you chose the seed, it is known as a "),a("code",[e._v("brain wallet")])])]),e._v(" "),a("h3",{attrs:{id:"brain-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brain-wallet"}},[e._v("#")]),e._v(" Brain Wallet")]),e._v(" "),a("ul",[a("li",{attrs:{id:"bw_l1"}},[e._v("\n    An account generated from a seed or password or passphrase of your choosing.\n  ")]),e._v(" "),a("li",{attrs:{id:"bw_l2"}},[e._v("\n    Humans are not capable of generating enough entropy and therefore the wallets derived from these phrases are insecure.\n  ")]),e._v(" "),a("li",{attrs:{id:"bw_l3"}},[e._v("\n    Brain wallets can be brute forced by super fast computers.\n  ")]),e._v(" "),a("li",{attrs:{id:"bw_l4"}},[a("a",{attrs:{href:"https://www.reddit.com/r/ethereum/comments/45y8m7/brain_wallets_are_now_generally_shunned_by/",target:"_blank"}},[e._v(" Brain wallet are insecure. ")])]),e._v(" "),a("li",{attrs:{id:"bw_l5"}},[e._v("\n    Don't use brain wallets.\n  ")])]),e._v(" "),a("h3",{attrs:{id:"entropy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entropy"}},[e._v("#")]),e._v(" Entropy")]),e._v(" "),a("ul",[a("li",{attrs:{id:"entropy_l1"}},[e._v('\n    Also known as "randomness".\n  ')]),e._v(" "),a("li",{attrs:{id:"entropy_l2"}},[e._v("\n    The more random something is, the more entropy it has, and the more secure it is.\n  ")]),e._v(" "),a("li",{attrs:{id:"entropy_l3"}},[e._v('\n    Usually defined in "bits of entropy" or the number of years it would take to brute-force a '),a("b",[e._v("\\_\\_\\_\\_")]),e._v(" (e.g. private key) derived with that much entropy.\n  ")]),e._v(" "),a("li",{attrs:{id:"entropy_l4"}},[e._v("\n    Ethereum private keys are 256-bit keys\n  ")]),e._v(" "),a("li",{attrs:{id:"entropy_l5"}},[e._v("\n    24-Word mnemonic phrases are also 256 bits of entropy. 2048 words in the dictionary. 11 bits of entropy (the words). "),a("code",[e._v("11 * 24 = 264")]),e._v(". The last word is a checksum.\n  ")])]),e._v(" "),a("h3",{attrs:{id:"derive-derivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derive-derivation"}},[e._v("#")]),e._v(" Derive / Derivation")]),e._v(" "),a("ul",[a("li",{attrs:{id:"deriveDeriv_l1"}},[e._v("\n    To derive something is to obtain it from an original source.\n  ")]),e._v(" "),a("li",{attrs:{id:"deriveDeriv_l2"}},[e._v("\n    For example, if we were to derive a Keystore from a private key and a password, this means that the Keystore is made from these two sources.\n  ")]),e._v(" "),a("li",{attrs:{id:"deriveDeriv_l3"}},[e._v("\n    The Keystore is a product of the two, thus it is derived from them.\n  ")])]),e._v(" "),a("h3",{attrs:{id:"encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encryption"}},[e._v("#")]),e._v(" Encryption")]),e._v(" "),a("ul",[a("li",{attrs:{id:"encryption_l1"}},[e._v("\n    Encryption is the act of taking a string of letters/numbers, like your private key, and turning them into another string of letters/numbers through a method of private translation.\n  ")]),e._v(" "),a("li",{attrs:{id:"encryption_l2"}},[e._v("\n    There are various different encryption methods.\n  ")]),e._v(" "),a("li",{attrs:{id:"encryption_l3"}},[e._v("\n    Encryption offers protection against those trying to steal your information!\n  ")])]),e._v(" "),a("h3",{attrs:{id:"encrypted-vs-unencrypted-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-vs-unencrypted-keys"}},[e._v("#")]),e._v(" Encrypted vs Unencrypted Keys")]),e._v(" "),a("ul",[a("li",{attrs:{id:"encvunenc_l1"}},[e._v("\n    An unencrypted private key is 64 characters long, and it is used to unlock or restore wallets.\n  ")]),e._v(" "),a("li",{attrs:{id:"encvunenc_l2"}},[e._v("\n    An encrypted key is also 64 letters long and is a regular private key that has gone through the process of encryption, as defined above.\n  ")]),e._v(" "),a("li",{attrs:{id:"encvunenc_l3"}},[e._v("\n    For example, if the world ‘Apple’ was your shortened private key, then it was encrypted three letters down the alphabet, your new shortened encrypted key would be ‘Dssoh’. Since you know the way to encrypt this key, you could derive the original private key from it by reversing the method of encryption.\n  ")]),e._v(" "),a("li",{attrs:{id:"encvunenc_l4"}},[e._v("\n    Usually encrypted private keys are kept within the extension or device they are encrypted by, and they remain out of sight from the user. This is meant to add another layer of security to keep a user’s wallet information safe.\n  ")])]),e._v(" "),a("h3",{attrs:{id:"decentralize-decentralization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decentralize-decentralization"}},[e._v("#")]),e._v(" Decentralize / Decentralization")]),e._v(" "),a("ul",[a("li",{attrs:{id:"decentralize_l"}},[e._v("\n    The process of transferring authority of a single entity (ex. Government or large corporation) to multiple smaller entities.\n  ")])]),e._v(" "),a("h3",{attrs:{id:"trustless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trustless"}},[e._v("#")]),e._v(" Trustless")]),e._v(" "),a("ul",[a("li",{attrs:{id:"trustless_l"}},[e._v("\n    A distributed trustless consensus which the blockchain is responsible for. Since everyone has a copy of the ledger of all transactions ever executed, there is no need for a third-party. You can verify the transactions yourself, however the Ethereum blockchain and Bitcoin blockchain were created to ensure rules and agreements between all parties are executed when all conditions are met.\n  ")])]),e._v(" "),a("h3",{attrs:{id:"smart-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-contracts"}},[e._v("#")]),e._v(" Smart Contracts")]),e._v(" "),a("ul",[a("li",{attrs:{id:"sc_l"}},[e._v("\n    A piece of code (or program) that is stored on the blockchain network. Conditions of the contract are predefined by the users, if all conditions are met, certain actions are executed by the contract (program).\n  ")])]),e._v(" "),a("h3",{attrs:{id:"blockchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain"}},[e._v("#")]),e._v(" Blockchain")]),e._v(" "),a("ul",[a("li",{attrs:{id:"blockchain_l"}},[e._v("\n    A decentralized publicly owned ledger.\n  ")])]),e._v(" "),a("p",{attrs:{id:"fixGlossary"}},[e._v("\n  All feedback, rewrites, clarification, typo-fixing, and requests for additions are more than welcome. ?\n")]),e._v(" "),a("p",[e._v("Thanks to "),a("a",{attrs:{href:"https://support.mycrypto.com/getting-started/ethereum-glossary.html",target:"_blank"}},[e._v("MyCrypto")]),e._v(" for this Glossary's starting point")])])}),[],!1,null,null,null);t.default=s.exports}}]);