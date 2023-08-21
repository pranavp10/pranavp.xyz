import { Code } from "@/components/core/core.code";
import { Container } from "@/components/core/core.container";
import { IconTitleCard } from "@/components/core/core.iconTitleCard";
import Kbd from "@/components/core/core.kbd";
import NumberList from "@/components/core/core.numberList";
import { Section } from "@/components/core/core.section";
import { TextCommand } from "@/components/core/core.textCommand";
import { Icon } from "@/components/utils/utils.icon";

const VSCodeSetup = () => (
  <Container
    title="VS Code Settings"
    description="This setup will help you to setup the vscode settings."
  >
    <Section title="Step 1">
      <IconTitleCard
        icon={
          <Icon gradientName="gradient" name="box" className={iconClassName} />
        }
        title="Download necessary files"
      >
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="flex flex-col gap-2">
            <a
              href="/download/operator-mono.zip"
              download
              className="transition-colors duration-300 ease-in-out hover:bg-zinc-100  hover:dark:bg-zinc-900  px-6 py-2.5 rounded-xl border-zinc-100 border-4 dark:border-zinc-900 flex items-center justify-center gap-4"
            >
              operator-mono.zip
            </a>
            <NumberList
              lists={[
                `Unzip the font's file`,
                `Select all the fonts, right click, and click to Install`,
              ]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="/download/vsc-extensions.txt"
              download
              className="transition-colors duration-300 ease-in-out hover:bg-zinc-100  hover:dark:bg-zinc-900  px-6 py-2.5 rounded-xl border-zinc-100 border-4 dark:border-zinc-900 flex items-center justify-center gap-4"
            >
              vsc-extensions.txt
            </a>
            <NumberList>
              <p>
                Place this file in{` `}
                <b>downloads</b>
              </p>
              <p>
                Open the vscode in{` `}
                <b>downloads directory</b>
              </p>
              <p>
                Install{` `}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=aslamanver.vsc-export"
                  target="_blank"
                  className="underline decoration-zinc-400 decoration-2 font-medium transition-all"
                  rel="noreferrer"
                >
                  VSC Export & Import
                </a>
                {` `} extension in vs code.
              </p>
            </NumberList>
          </div>
        </div>
      </IconTitleCard>
    </Section>
    <Section title="Step 2">
      <IconTitleCard
        icon={
          <Icon gradientName="gradient" name="box" className={iconClassName} />
        }
        title="Installing all the extensions"
      >
        <NumberList>
          <p>Open the vscode</p>
          <p>
            Open Prompt by press the <b>cmd</b> + <b>shift</b> + <b>p</b> key
            <br />
            <Kbd text="⌘" />
            {` `}+{` `}
            <Kbd text="⇧" />
            {` `}+{` `}
            <Kbd text="P" />
          </p>
          <TextCommand cmd="VSC Export & Import" />
          <p>All extension will start to install</p>
        </NumberList>
      </IconTitleCard>
    </Section>
    <Section title="Step 3">
      <IconTitleCard
        icon={
          <Icon
            gradientName="gradient"
            name="coding"
            className={iconClassName}
          />
        }
        title="VS Code Settings"
      >
        <NumberList>
          <p>
            Open Prompt by press the <b>cmd</b> + <b>shift</b> + <b>p</b> key
            <br />
            <Kbd text="⌘" />
            {` `}+{` `}
            <Kbd text="⇧" />
            {` `}+{` `}
            <Kbd text="P" />
          </p>
          <TextCommand cmd="Preferences: Open Settings (JSON)" />
          <div className="mt-4">
            <p>Copy the settings.json from the below window </p>
            <div className="mt-6">
              <Code code={settingsJSON} language="json" title="settings.json" />
            </div>
          </div>
          <p>Past the code in the settings.json file in vs code</p>
          <p>
            Save the setting.json file{`  `}
            <Kbd text="⌘" /> + <Kbd text="s" />
            {`  `}
            and restart the vscode.
          </p>
          <p>Done! 🚀</p>
        </NumberList>
      </IconTitleCard>
    </Section>
  </Container>
);

const iconClassName = `border-2 md:border-4 dark:border-zinc-900 border-zinc-100 rounded-lg md:rounded-2xl w-9 h-9 md:w-16 md:h-16 md:p-3 p-1.5`;

export default VSCodeSetup;

const settingsJSON = `{
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
  },
  "[python]": {
    "editor.formatOnType": true,
    "editor.defaultFormatter": "ms-python.autopep8",
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
  },
  "auto-rename-tag.activationOnLanguage": ["*"],
  "blockman.n01LineHeight": 0,
  "cSpell.language": "en,en-US,en-GB",
  "cSpell.languageSettings": [],
  "cSpell.userWords": [],
  "diffEditor.wordWrap": "on",
  "editor.accessibilitySupport": "off",
  "editor.bracketPairColorization.enabled": true,
  "editor.cursorBlinking": "solid",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 5,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.detectIndentation": true,
  "editor.fontFamily":
    "Operator Mono,'Fira Code', Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 17,
  "editor.fontWeight": "400",
  "editor.formatOnPaste": true,
  "editor.guides.bracketPairs": false,
  "editor.guides.indentation": false,
  "editor.inlayHints.enabled": "on",
  "editor.inlineSuggest.enabled": true,
  "editor.insertSpaces": true,
  "editor.largeFileOptimizations": false,
  "editor.letterSpacing": 0.5,
  "editor.lineHeight": 25,
  "editor.linkedEditing": true,
  "editor.quickSuggestions": {
    comments: false,
    other: true,
    strings: true,
  },
  "editor.renderLineHighlight": "line",
  "editor.renderWhitespace": "all",
  "editor.stickyScroll.enabled": true,
  "editor.suggestSelection": "first",
  "editor.tabSize": 1,
  "editor.wordWrap": "on",
  "emmet.triggerExpansionOnTab": true,
  "errorLens.excludeBySource": [
    "ts(2304)",
    "eslint(@typescript-eslint/no-unused-vars)",
    "ts(2339)",
  ],
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.ignoreRebaseWarning": true,
  "git.openRepositoryInParentFolders": "always",
  "git.suggestSmartCommit": false,
  "github.copilot.enable": {
    "*": true,
    plaintext: false,
    markdown: false,
    scminput: false,
    properties: true,
    yaml: true,
  },
  "gitlens.advanced.messages": {
    suppressLineUncommittedWarning: true,
  },
  "gitlens.gitCommands.closeOnFocusOut": true,
  "importCost.showCalculatingDecoration": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "json.schemas": [],
  "liveServer.settings.donotShowInfoMsg": true,
  "liveshare.allowGuestDebugControl": true,
  "liveshare.allowGuestTaskControl": true,
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.env.osx": {
    FIG_NEW_SESSION: "1",
  },
  "terminal.integrated.fontFamily": "Operator Mono",
  "typescript.inlayHints.parameterNames.enabled": "all",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "vsicons.dontShowNewVersionMessage": true,
  "vsintellicode.modify.editor.suggestSelection":
    "automaticallyOverrodeDefaultValue",
  "workbench.colorCustomizations": {
    "editor.lineHighlightBackground": "#1073cf2d",
    "editor.lineHighlightBorder": "#9fced11f",
  },
  "workbench.colorTheme": "Winter is Coming (Dark Blue)",
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.productIconTheme": "fluent-icons",
  "workbench.settings.enableNaturalLanguageSearch": false,
  "workbench.sideBar.location": "right",
  "workbench.startupEditor": "newUntitledFile",
  "editor.formatOnSave": true,
  "console-ninja.featureSet": "Pro",
  "[svg]": {
    "editor.defaultFormatter": "jock.svg",
  },
};`;
