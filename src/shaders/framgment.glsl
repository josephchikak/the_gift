uniform sampler2D backTexture;

void main() {
    vec2 uv = gl_FragCoord.xy;
    vec3 color = texture(backTexture, uv).rgb;

    gl_FragColor = vec4(uv,0.0, 1.0);
}
