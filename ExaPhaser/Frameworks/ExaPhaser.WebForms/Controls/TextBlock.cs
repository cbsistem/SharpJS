﻿using JSIL.Dom.Elements;

namespace ExaPhaser.WebForms.Controls
{
    public class TextBlock : TextControl
    {
        #region Private Fields

        private string _text;

        #endregion Private Fields

        #region Public Constructors

        public TextBlock() : base()
        {
            InternalElement = new ParagraphElement();
        }

        #endregion Public Constructors

        #region Public Properties

        public string Text
        {
            get { return _text; }
            set { SetText(value); }
        }

        #endregion Public Properties

        #region Private Methods

        private void SetText(string value)
        {
            InternalElement.TextContent = value;
            _text = value;
        }

        #endregion Private Methods
    }
}