export enum ButtonType {
    Default = 'default',
    Gradient = 'gradient',
    Transparent = 'transparent',
};

export enum TitleType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    Title = 'title',
    SubTitle = 'subtitle',
};

export enum TextType {
    Control = 'control',
    Caption = 'caption',
    Body = 'body',
    Action = 'action',
};

export type UUID = string;

export type TestId = {
    test_id: UUID,
};

export type Status =
    | 'NOT_STARTED' 
    | 'IN_PROGRESS' 
    | 'COMPLETED'
    | 'ERROR'
    | 'UNDEFINED';
