'use client';
import { useState } from 'react';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  // 密码生成逻辑（网页1、网页2的核心算法简化版）
  const generate = () => {
    const chars = [
      ...(options.uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''),
      ...(options.lowercase ? 'abcdefghijklmnopqrstuvwxyz' : ''),
      ...(options.numbers ? '0123456789' : ''),
      ...(options.symbols ? '!@#$%^&*()' : ''),
    ].join('');

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    setPassword(Array.from(array, n => chars[n % chars.length]).join(''));
  };

  // 复制功能（网页2的简化实现）
  const copy = async () => {
    await navigator.clipboard.writeText(password);
    alert('已复制到剪贴板');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      {/* 密码显示区 */}
      <div className="flex gap-2 mb-4">
        <input
          value={password}
          readOnly
          className="w-full px-4 py-2 border rounded"
          placeholder="点击生成密码"
        />
        <button onClick={copy} className="px-4 bg-blue-500 text-white rounded">
          📋
        </button>
      </div>

      {/* 长度调节（网页3的滑动条优化） */}
      <div className="mb-4">
        <label className="block mb-2">长度：{length}</label>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={e => setLength(+e.target.value)}
          className="w-full"
        />
      </div>

      {/* 选项开关（网页4的布局优化） */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {Object.entries(options).map(([key, value]) => (
          <label key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={value}
              onChange={e =>
                setOptions(v => ({ ...v, [key]: e.target.checked }))
              }
              className="h-4 w-4"
            />
            <span>
              {key === 'uppercase' && '大写字母'}
              {key === 'lowercase' && '小写字母'}
              {key === 'numbers' && '数字'}
              {key === 'symbols' && '符号'}
            </span>
          </label>
        ))}
      </div>

      {/* 生成按钮（网页5的交互优化） */}
      <button
        onClick={generate}
        className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        🔐 生成密码
      </button>
    </div>
  );
}
