import { XMLParser } from 'fast-xml-parser';

declare type ApiPasteFormat = "4cs" | "6502acme" | "6502kickass" | "6502tasm" | "abap" | "actionscript" | "actionscript3" | "ada" | "aimms" | "algol68" | "apache" | "applescript" | "apt_sources" | "arduino" | "arm" | "asm" | "asp" | "asymptote" | "autoconf" | "autohotkey" | "autoit" | "avisynth" | "awk" | "bascomavr" | "bash" | "basic4gl" | "dos" | "bibtex" | "b3d" | "blitzbasic" | "bmx" | "bnf" | "boo" | "bf" | "c" | "csharp" | "c_winapi" | "cpp" | "cpp-winapi" | "cpp-qt" | "c_loadrunner" | "caddcl" | "cadlisp" | "ceylon" | "cfdg" | "c_mac" | "chaiscript" | "chapel" | "cil" | "clojure" | "klonec" | "klonecpp" | "cmake" | "cobol" | "coffeescript" | "cfm" | "css" | "cuesheet" | "d" | "dart" | "dcl" | "dcpu16" | "dcs" | "delphi" | "oxygene" | "diff" | "div" | "dot" | "e" | "ezt" | "ecmascript" | "eiffel" | "email" | "epc" | "erlang" | "euphoria" | "fsharp" | "falcon" | "filemaker" | "fo" | "f1" | "fortran" | "freebasic" | "freeswitch" | "gambas" | "gml" | "gdb" | "gdscript" | "genero" | "genie" | "gettext" | "go" | "godot-lsl" | "groovy" | "gwbasic" | "haskell" | "haxe" | "hicest" | "hq9plus" | "html4strict" | "html5" | "icon" | "idl" | "ini" | "inno" | "intercal" | "io" | "ispfpanel" | "j" | "java" | "java5" | "javascript" | "jcl" | "jquery" | "json" | "julia" | "kixtart" | "kotlin" | "ksp" | "latex" | "ldif" | "lb" | "lsl2" | "lisp" | "llvm" | "locobasic" | "logtalk" | "lolcode" | "lotusformulas" | "lotusscript" | "lscript" | "lua" | "m68k" | "magiksf" | "make" | "mapbasic" | "markdown" | "matlab" | "mercury" | "metapost" | "mirc" | "mmix" | "mk-61" | "modula2" | "modula3" | "68000devpac" | "mpasm" | "mxml" | "mysql" | "nagios" | "netrexx" | "newlisp" | "nginx" | "nim" | "nsis" | "oberon2" | "objeck" | "objc" | "ocaml" | "ocaml-brief" | "octave" | "pf" | "glsl" | "oorexx" | "oobas" | "oracle8" | "oracle11" | "oz" | "parasail" | "parigp" | "pascal" | "pawn" | "pcre" | "per" | "perl" | "perl6" | "phix" | "php" | "php-brief" | "pic16" | "pike" | "pixelbender" | "pli" | "plsql" | "postgresql" | "postscript" | "povray" | "powerbuilder" | "powershell" | "proftpd" | "progress" | "prolog" | "properties" | "providex" | "puppet" | "purebasic" | "pycon" | "python" | "pys60" | "q" | "qbasic" | "qml" | "rsplus" | "racket" | "rails" | "rbs" | "rebol" | "reg" | "rexx" | "robots" | "roff" | "rpmspec" | "ruby" | "gnuplot" | "rust" | "sas" | "scala" | "scheme" | "scilab" | "scl" | "sdlbasic" | "smalltalk" | "smarty" | "spark" | "sparql" | "sqf" | "sql" | "sshconfig" | "standardml" | "stonescript" | "sclang" | "swift" | "systemverilog" | "tsql" | "tcl" | "teraterm" | "texgraph" | "thinbasic" | "typescript" | "typoscript" | "unicon" | "uscript" | "upc" | "urbi" | "vala" | "vbnet" | "vbscript" | "vedit" | "verilog" | "vhdl" | "vim" | "vb" | "visualfoxpro" | "visualprolog" | "whitespace" | "whois" | "winbatch" | "xbasic" | "xml" | "xojo" | "xorg_conf" | "xpp" | "yaml" | "yara" | "z80" | "zxbasic";
/**
 * the publicity status of a paste
 */
declare enum Publicity {
    Public = 0,
    Unlisted = 1,
    Private = 2
}
declare enum ExpireDate {
    Never = "N",
    TenMinutes = "10M",
    OneHour = "1H",
    OneDay = "1D",
    OneWeek = "1W",
    TwoWeeks = "2W",
    OneMonth = "1M",
    SixMonths = "6M",
    OneYear = "1Y"
}
interface ClientOptions {
    /**
     * the API key
     */
    apiKey: string;
    /**
     * the domain of your reverse proxy server
     */
    domain?: string;
}
interface CreateOptions {
    /**
     * the publicity status of the paste.
     * @default 0 (public)
     */
    publicity?: Publicity;
    /**
     * the expire date of the paste
     * @default "N" (Never)
     */
    expireDate?: ExpireDate;
    /**
     * the format of the paste
     * @default "javascript"
     */
    format?: ApiPasteFormat;
    /**
     * the name of the paste
     * @default "Untitled"
     */
    name?: string;
    apiUserKey?: string;
    folderKey?: string;
    code: string;
}
interface GetPastesOptions {
    userKey: string;
    limit?: number;
}
interface DeletePasteOptions {
    userKey: string;
    pasteKey: string;
}
declare type GetRawPasteOptions = DeletePasteOptions;
interface ParsedPaste {
    paste_key: string;
    paste_date: number;
    paste_title: string;
    paste_size: number;
    paste_expire_date: number;
    paste_private: Publicity;
    paste_format_long: string;
    paste_format_short: ApiPasteFormat;
    paste_url: string;
    paste_hits: string;
}

declare class PasteClient {
    private apiKey;
    private domain;
    protected parser: XMLParser;
    private get pasteBinUrl();
    private get loginUrl();
    private get rawUrl();
    constructor(options: string | ClientOptions);
    /**
     * creates the paste
     * @param {Options} options The options for the paste
     * @returns {Promise<string>} The URL of the created paste
     * @see [https://pastebin.com/doc_api#2](https://pastebin.com/doc_api#2)
     */
    createPaste(options: CreateOptions): Promise<string>;
    /**
     * get a limit of 1000 pastes from the logged in user
     * @param {GetPastesOptions} options
     * @returns An array of all the user's pastes
     * @see [https://pastebin.com/doc_api#10](https://pastebin.com/doc_api#10)
     */
    getPastesByUser(options: GetPastesOptions): Promise<undefined | ParsedPaste[]>;
    /**
     * delete a paste by it's key
     * @param {DeletePasteOptions} options
     * @returns {boolean} Whether it was deleted or not
     * @see [https://pastebin.com/doc_api#11](https://pastebin.com/doc_api#11)
     */
    deletePasteByKey(options: DeletePasteOptions): Promise<boolean>;
    /**
     * return raw paste by it's key
     * @param {GetRawPasteOptions} options
     * @returns {string} The raw paste
     * @see [https://pastebin.com/doc_api#14](https://pastebin.com/doc_api#14)
     */
    getRawPasteByKey(options: GetRawPasteOptions): Promise<string>;
    /**
     * login to get access to more API routes
     * @param {string} name The user's name
     * @param {string} password The user's password
     * @returns The user token to use for other API routes
     * @see [https://pastebin.com/doc_api#9](https://pastebin.com/doc_api#9)
     */
    login(name: string, password: string): Promise<string>;
    /**
     * encodes data to valid URI
     * @param data The data you want to encode
     */
    private encode;
}

export { ApiPasteFormat, ClientOptions, CreateOptions, DeletePasteOptions, ExpireDate, GetPastesOptions, GetRawPasteOptions, ParsedPaste, PasteClient, Publicity, PasteClient as default };
