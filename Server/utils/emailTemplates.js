exports.otpTemplate = (otp) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Verify Your Email — ChordSense</title>
</head>
<body style="margin:0;padding:0;background-color:#0c0a09;font-family:'Courier New',monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0c0a09;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0"
          style="background:#1c1917;border:1px solid #44403c;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:32px;text-align:center;border-bottom:1px solid #292524;">
              <p style="margin:0 0 4px;color:#fbbf24;font-size:10px;letter-spacing:6px;text-transform:uppercase;">
                ◈ CHORDSENSE
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                Verify Your Email
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;text-align:center;">
              <p style="margin:0 0 28px;color:#a8a29e;font-size:14px;line-height:1.6;">
                Welcome to ChordSense 🎸<br>
                Use the code below to verify your email address.
              </p>

              <!-- OTP Box -->
              <div style="background:#0c0a09;border:1px solid #fbbf2440;border-radius:12px;
                          padding:24px 40px;display:inline-block;margin-bottom:28px;">
                <p style="margin:0 0 6px;color:#78716c;font-size:10px;letter-spacing:4px;text-transform:uppercase;">
                  Your OTP
                </p>
                <p style="margin:0;color:#fbbf24;font-size:42px;font-weight:700;letter-spacing:12px;">
                  ${otp}
                </p>
              </div>

              <p style="margin:0 0 8px;color:#78716c;font-size:12px;letter-spacing:2px;text-transform:uppercase;">
                Valid for 10 minutes
              </p>
              <p style="margin:0;color:#57534e;font-size:12px;">
                If you didn't create a ChordSense account, ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;text-align:center;border-top:1px solid #292524;">
              <p style="margin:0;color:#44403c;font-size:10px;letter-spacing:3px;text-transform:uppercase;">
                © CHORDSENSE — BUILT FOR GUITARISTS
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

exports.forgotPasswordTemplate = (resetURL) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Reset Your Password — ChordSense</title>
</head>
<body style="margin:0;padding:0;background-color:#0c0a09;font-family:'Courier New',monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0c0a09;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0"
          style="background:#1c1917;border:1px solid #44403c;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:32px;text-align:center;border-bottom:1px solid #292524;">
              <p style="margin:0 0 4px;color:#fbbf24;font-size:10px;letter-spacing:6px;text-transform:uppercase;">
                ◈ CHORDSENSE
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">
                Reset Your Password
              </h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;text-align:center;">
              <div style="width:52px;height:52px;background:#fbbf2410;border:1px solid #fbbf2430;
                          border-radius:12px;margin:0 auto 24px;line-height:52px;font-size:24px;">
                🔐
              </div>

              <p style="margin:0 0 24px;color:#a8a29e;font-size:14px;line-height:1.7;">
                We received a request to reset your ChordSense password.<br>
                Click the button below — this link expires in <strong style="color:#fbbf24;">10 minutes</strong>.
              </p>

              <!-- CTA Button -->
              <a href="${resetURL}"
                style="display:inline-block;background:#fbbf2415;border:1px solid #fbbf2450;
                       color:#fbbf24;text-decoration:none;padding:14px 36px;border-radius:50px;
                       font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">
                Reset Password →
              </a>

              <!-- URL fallback -->
              <p style="margin:28px 0 0;color:#57534e;font-size:11px;line-height:1.6;">
                Or copy this link into your browser:<br>
                <span style="color:#78716c;word-break:break-all;">${resetURL}</span>
              </p>

              <p style="margin:20px 0 0;color:#44403c;font-size:12px;">
                If you didn't request this, your password won't change.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;text-align:center;border-top:1px solid #292524;">
              <p style="margin:0;color:#44403c;font-size:10px;letter-spacing:3px;text-transform:uppercase;">
                © CHORDSENSE — BUILT FOR GUITARISTS
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;